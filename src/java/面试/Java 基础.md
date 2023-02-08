# Java 基础

## 面向对象

什么是面向对象？

对比面向过程，是两种不同的处理问题的角度。面向过程更注重事情的每一个步骤级顺序，面向对象更注重事情有哪些参与者（对象）、以及各自需要做什么。



## == 和 equals 比较

== 对比的是栈中的值，基本数据类型是变量值，引用类型是堆中内存对象的地址

equals：Object 中默认也是采用 == 比较，通常会重写。

Object

```java
public boolean equals(Object obj) {
    return (this == obj);
}
```

String

```java
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String anotherString = (String)anObject;
        int n = value.length;
        if (n == anotherString.value.length) {
            char v1[] = value;
            char v2[] = anotherString.value;
            int i = 0;
            while (n-- != 0) {
                if (v1[i] != v2[i])
                    return false;
                i++;
            }
            return true;
        }
    }
    return false;
}
```

从上述代码可以看出，String 类中被重写的 equals() 方法其实是比较两个字符串的内容。

```java
public class StringDemo {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = new String("Hello");
        String str3 = str2;		// 引用传递
        System.out.println(str1 == str2);	// false
        System.out.println(str1 == str3);	// false
        System.out.println(str2 == str3);	// true
        System.out.println(str1.equals(str2));	// true
        System.out.println(str1.equals(str3));	// true
        System.out.println(str2.equals(str3));	// true
    }
}
```



## final

### 简述 final 的作用

最终的

- 修饰类：表示类不可被继承。
- 修饰方法：表示方法不可被子类覆盖，但是可以重载。
- 修饰变量：表示变量一旦被赋值就不可以更改它们的值。

（1）修饰成员变量

- 如果 final 修饰的是类变量，只能在静态初始化块中指定初始值或者声明该类变量时指定初始值。
- 如果 final 修饰的是成员变量，可以在非静态初始化块、声明该变量或者构造器中执行初始值。

（2）修饰局部变量

系统不会为局部变量进行初始化，局部变量必须由程序员显式初始化。因此使用 final 修饰局部变量时，既可以在定义时指定默认值（后面的代码不能对变量再赋值），也可以不指定默认值，而在后面的代码中对 final 变量赋初值（仅一次）。

```java
public class FinalVar {
    final static int a = 0;		// 在声明的时候就需要赋值，或者静态代码块赋值
    /**
    static {
    	a = 0;
    }
    */
    final int b = 0;
    /*
    {
    	b = 0;
    }
    */
    public static void main(String[] args) {
        final int localA;	// 局部变量只声明没有初始化，不会报错，与 final 无关。
        localA = 0;			// 在使用之前一定要赋值
        // localA = 1;		// 但是不允许第二次赋值
    }
}
```

（3）修饰基本类型数据和引用类型数据

- 如果是基本数据类型的变量，则其数值一旦在初始化后变不能更改；
- 如果是引用类型的变量，则在对其初始化之后便不能再让其指向另一个对象。**但是引用的值是可变的。**

```java
public class FinalReferneceTest {
    public static void main(String[] args) {
        final int[] iArr = {1, 2, 3, 4};
        iArr[2] = -3;	// 合法
        iArr = null;	// 非法，对 iArr 不能重新赋值
        
        final Person p = new Person(25);
        p.setAge(24);	// 合法
        p = null;		// 非法
    }
}
```



### 为什么局部内部类和匿名内部类只能访问局部 final 变量？

编译之后会生成两个 class 文件，Test.class、Test1.class

```java
public class Test {
    // 局部 final 变量 a, b
    public void test(final int b) {
        final int a = 10;
        // 匿名内部类
        new Thread() {
            public void run() {
                System.out.println(a);
                System.out.println(b);
            };
        }.start();
    }
}

class OutClass {
    private int age = 12;
    public void outPrint(final int x) {
        class InClass {
            public void inPrint() {
                System.out.println(x);
                System.out.println(age);
            }
        }
        new InClass().inPrint();
    }
}
```

首先要知道的一点是：内部类和外部类是处于同一个级别的，内部类不会因为定义在方法中就会随着方法的执行完毕就被销毁。

这里就会产生问题：当外部类的方法结束时，局部变量就会被销毁了，但是内部类对象可能还存在（只有没人再引用它时，才会死亡）。这里就出现了一个矛盾：内部类对象访问了一个不存在的变量。为了解决这个问题，九江局部变量复制了一份作为内部类的成员变量，这样当局部变量死亡后，内部类仍可以访问它，实际访问的是局部变脸的 “copy”。这样就好像延长了局部变量的生命周期。

将局部变量复制为内部的成员变量时，必须保证这两个变量是一样的，也就是如果我们在内部类中修改了成员变量，方法中的局部变量也得跟着改变，怎么解决问题呢？

就将局部变量这是为 final，对它初始化后，我就不让你再去修改这个变量，就保证了内部类的成员变量和方法的局部变量的一致性。这实际上也是一种妥协。使得局部变量与内部类建立的拷贝保持一致。



## String、StringBuffer、StringBuilder 区别及使用场景

- String 是 final 修饰的，不可变，每次操作都会产生新的 String 对象。
- StringBuffer 和 StringBuilder 都是在原对象上操作。
- StringBuffer 是线程安全的，StringBuilder 不是线程安全的。
- StringBuffer 方法都是 synchronized 修饰的。

性能：StringBuilder > StringBuffer > String

使用场景：经常需要改变字符串内容时使用后面两个

优先使用 StringBuilder，多线程使用共享变量时使用 StringBuffer。



## 重载和重写的区别

**重载**：发生在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问修饰符可以不同，发生在编译时。

**重写**：发生在父子类中，方法名、参数列表必须相同，返回值范围小于等于父类，抛出的异常范围小于等于父类，访问修饰符的范围大于等于父类；如果父类方法访问修饰符为 private 则子类就不能重写该方法。

```java
public int add(int a, String b) {...}
public String add(int a, String b) {...}
// 编译报错
```



## 接口和抽象类的区别

- 抽象类可以存在普通成员函数，而接口中只能存在 public abstract 方法。
- 抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是 public static final 类型的。
- 抽象类只能继承一个，接口可以实现多个。

接口设计的目的，是对类的行为进行约束（更准确地说是一种“有”约束，因为接口不饿能规定类不可以有什么行为），也就是提供一种机制，可以强制要求不同的类具有相同的行为。它只约束了行为的有无，但不对如何实现行为进行限制。

而抽象类的设计目的，是代码复用。当不同的类具有某些相同的行为（记为行为集合A），且其中一部分行为的实现方式一致时（A的非真子集，记为B），可以让这些类都派生于一个抽象类。在这个抽象类中实现了 B，避免让所有的子类来实现 B，这就达到了代码复用的目的。而 A 减 B 的部分，留给各个子类自己实现
