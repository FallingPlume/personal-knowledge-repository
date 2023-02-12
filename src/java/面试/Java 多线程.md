

# Java 多线程

## 什么是进程，什么是线程？

**进程**是指运行中的程序。 比如我们使用钉钉，浏览器，需要启动这个程序，操作系统会给这个程序 分配一定的资源（占用内存资源）。

**线程**是 CPU 调度的基本单位，每个线程执行的都是某一个进程的代码的某个片段。

举个栗子：房子与人

比如现在有一个 100 平的房子，这个方式可以看做是一个进程。房子里有人，人就可以看做成一个线程。人在房子中做一个事情，比如吃饭，学习，睡觉。这个就好像线程在执行某个功能的代码。 所谓进程就是线程的容器，需要线程利用进程中的一些资源，处理一个代码、指令。最终实现进程锁 预期的结果。

进程和线程的区别：

- 根本不同：进程是操作系统分配的资源，而线程是 CPU 调度的基本单位。
- 资源方面：同一个进程下的线程共享进程中的一些资源。线程同时拥有自身的独立存储空间。进程之间的资源通常是独立的。
- 数量不同：进程一般指的就是一个进程。而线程是依附于某个进程的，而且一个进程中至少会有 一个或多个线程。
- 开销不同：毕竟进程和线程不是一个级别的内容，线程的创建和终止的时间是比较短的。而且线程之间的切换比进程之间的切换速度要快很多。而且进程之间的通讯很麻烦，一般要借助内核才可以实现，而线程之间通讯，相当方面。



## 什么是多线程？

多线程是指：**单个进程中同时运行多个线程**。多线程的不低是为了提高CPU的利用率。可以通过避免一些网络IO或者磁盘IO等需要等待的操作，让CPU去调度其他线程。这样可以大幅度的提升程序的效率，提高用户的体验。

比如 Tomcat 可以做并行处理，提升处理的效率，而不是一个一个排队。不如要处理一个网络等待的操作，开启一个线程去处理需要网络等待的任务，让当前业务线程可以继 续往下执行逻辑，效率是可以得到大幅度提升的。

多线程的局限：

- 如果线程数量特别多，CPU在切换线程上下文时，会额外造成很大的消耗。
- 任务的拆分需要依赖业务场景，有一些异构化的任务，很难对任务拆分，还有很多业务并不是多线程处理更好。
- 线程安全问题：虽然多线程带来了一定的性能提升，但是再做一些操作时，多线程如果操作临界 资源，可能会发生一些数据不一致的安全问题，甚至涉及到锁操作时，会造成死锁问题。



## 串行，并行，并发

什么是串行：串行就是一个一个排队，第一个做完，第二个才能上。

什么是并行：并行就是同时处理。（一起上！！！） 

什么是并发：这里的并发并不是三高中的高并发问题，这里是多线程中的并发概念（CPU调度线程的概念）。 CPU 在极短的时间内，反复切换执行不同的线程，看似好像是并行，但是只是 CPU 高速的切换。并行囊括并发。

并行就是多核 CPU 同时调度多个线程，是真正的多个线程同时执行。 单核 CPU 无法实现并行效果，单核 CPU 是并发。



## 同步异步、阻塞非阻塞

同步与异步：执行某个功能后，被调用者是否会**主动反馈**信息

阻塞和非阻塞：执行某个功能后，调用者是否需要**一直等待结果**的反馈。

两个概念看似相似，但是侧重点是完全不一样的。

**同步阻塞**：比如用锅烧水，水开后，不会主动通知你。烧水开始执行后，需要一直等待水烧开。

**同步非阻塞**：比如用锅烧水，水开后，不会主动通知你。烧水开始执行后，不需要一直等待水烧开， 可以去执行其他功能，但是需要时不时的查看水开了没。

**异步阻塞**：比如用水壶烧水，水开后，会主动通知你水烧开了。烧水开始执行后，需要一直等待水烧 开。

**异步非阻塞**：比如用水壶烧水，水开后，会主动通知你水烧开了。烧水开始执行后，不需要一直等待 水烧开，可以去执行其他功能。

异步非阻塞这个效果是最好的，平时开发时，提升效率最好的方式就是采用异步非阻塞的方式处理一 些多线程的任务。



## 线程的创建方式

线程的创建分为三种方式：

1. 继承 Thread 类，重写 run 方法。启动线程是调用 start 方法，这样会创建一个新的线程，并执行线程的任务。 如果直接调用 run 方法，这样会让当前线程执行 run 方法中的业务逻辑。

   ```java
   public class MiTest {
       public static void main(String[] args) {
           MyJob t1 = new MyJob();
           t1.start();
           for (int i = 0; i < 100; i++) {
               System.out.println("main:" + i);
           }
       }
   }
   class MyJob extends Thread {
       @Override
       public void run() {
           for (int i = 0; i < 100; i++) {
               System.out.println("MyJob:" + i);
           }
       }
   }
   ```

2. 实现 Runnable 接口 重写 run 方法

   ```java
   public class MiTest {
       public static void main(String[] args) {
           MyRunnable myRunnable = new MyRunnable();
           Thread t1 = new Thread(myRunnable);
           t1.start();
           for (int i = 0; i < 1000; i++) {
               System.out.println("main:" + i);
           }
       }
   }
   class MyRunnable implements Runnable {
       @Override
       public void run() {
           for (int i = 0; i < 1000; i++) {
               System.out.println("MyRunnable:" + i);
           }
       }
   }
   ```

   最常用的方式：

      - 匿名内部类方式

        ```java
        Thread t1 = new Thread(new Runnable() {
           @Override
           public void run() {
               for (int i = 0; i < 1000; i++) {
                   System.out.println("匿名内部类:" + i);
               }
           }
         });
        ```

      - lambda 方式

        ```java
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 100; i++) {
                System.out.println("lambda:" + i);
            }
        });
        ```

3. 实现 Callable 重写 call 方法，配合 FutureTas

   Callable 一般用于有返回结果的非阻塞的执行方法。

   ```java
   public class MyTest {
       public static void main(String[] args) throws ExecutionException, InterruptedException {
           //1. 创建 MyCallable
           MyCallable myCallable = new MyCallable();
           //2. 创建 FutureTask，传入Callable
           FutureTask futureTask = new FutureTask(myCallable);
           //3. 创建 Thread线程
           Thread t1 = new Thread(futureTask);
           //4. 启动线程
           t1.start();
           //5. 做一些操作
           //6. 要结果
           Object count = futureTask.get();
           System.out.println("总和为：" + count);
       }
   }
   class MyCallable implements Callable{
       @Override
       public Object call() throws Exception {
           int count = 0;
           for (int i = 0; i < 100; i++) {
               count += i;
           }
           return count;
       }
   }
   ```

4. 基于线程池构建线程

   追其底层，其实只有一种，实现 Runnble。



## 线程的状态

网上对线程状态的描述很多，有5种，6种，7种，都可以接受。

5种状态一般是针对传统的线程状态来说（操作系统层面）

![](/assets/imgs/java/面试/多线程/图片1.png)

Java 中给线程准备的6种状态

![](/assets/imgs/java/面试/多线程/图片2.png)

**NEW**：Thread 对象被创建出来了，但是还没有执行 start 方法。

**RUNNABLE**：Thread 对象调用了 start 方法，就为 RUNNABLE 状态（CPU调度/没有调度） 。

**BLOCKED、WAITING、TIME_WAITING**：都可以理解为是阻塞、等待状态，因为处在这三种状态下，CPU 不会调度当前线程。

**BLOCKED**：synchronized 没有拿到同步锁，被阻塞的情况。

**WAITING**：调用 wait 方法就会处于 WAITING 状态，需要被手动唤醒。

**TIME_WAITING**：调用 sleep 方法或者 join 方法，会被自动唤醒，无需手动唤醒。

**TERMINATED**：run 方法执行完毕，线程生命周期到头了。

在Java代码中验证一下效果：

NEW

```java
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        
    });
    System.out.println(t1.getState());
}
```

RUNNABLE

```java
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        while(true){
            
        }
    });
    t1.start();
    Thread.sleep(500);
    System.out.println(t1.getState());
}
```

BLOCKED

```java
public static void main(String[] args) throws InterruptedException {
    Object obj = new Object();
    Thread t1 = new Thread(() -> {
        // t1 线程拿不到锁资源，导致变为 BLOCKED 状态
        synchronized (obj) {

        }
    });
    // main 线程拿到obj的锁资源
    synchronized (obj) {
        t1.start();
        Thread.sleep(500);
        System.out.println(t1.getState());
    }
}
```

WAITING

```java
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    });
    t1.start();
    Thread.sleep(500);
    System.out.println(t1.getState());
}
```

TERMINATED

```java
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    });
    t1.start();
    Thread.sleep(1000);
    System.out.println(t1.getState());
}
```



## 线程的常用方法

### 获取当前线程

Thread 的静态方法获取当前线程对象。

```java
public static void main(String[] args) throws ExecutionException, InterruptedException {
    // 获取当前线程的方法
    Thread main = Thread.currentThread();
    System.out.println(main);
    // "Thread[" + getName() + "," + getPriority() + "," + group.getName() + "]";
    // Thread[main,5,main]
}
```

### 线程的名字

在构建 Thread 对象完毕后，一定要设置一个有意义的名称，方面后期排查错误。

```java
public static void main(String[] args) throws ExecutionException, InterruptedException {
    Thread t1 = new Thread(() -> {
        System.out.println(Thread.currentThread().getName());
    });
    t1.setName("模块-功能-计数器");
    t1.start();
}
```

### 线程的优先级

其实就是 CPU 调度线程的优先级。Java中给线程设置的优先级别有 10 个级别，从 1~10 任取一个整数。如果超出这个范围，会排除参数异常的错误。

```java
public static void main(String[] args) throws ExecutionException, InterruptedException {
    Thread t1 = new Thread(() -> {
        for (int i = 0; i < 1000; i++) {
            System.out.println("t1:" + i);
        }
    });
    Thread t2 = new Thread(() -> {
        for (int i = 0; i < 1000; i++) {
            System.out.println("t2:" + i);
        }
    });
    t1.setPriority(1);
    t2.setPriority(10);
    t2.start();
    t1.start();
}
```

### 线程的让步

可以通过 Thread 的静态方法 yield，让当前线程从运行状态转变为就绪状态。

```java
public static void main(String[] args) throws ExecutionException, InterruptedException {
    Thread t1 = new Thread(() -> {
        for (int i = 0; i < 100; i++) {
            if (i == 50) {
                Thread.yield();
            }
            System.out.println("t1:" + i);
        }
    });
    Thread t2 = new Thread(() -> {
        for (int i = 0; i < 100; i++) {
            System.out.println("t2:" + i);
        }
    });
    t2.start();
    t1.start();
}
```

### 线程的休眠

Thread的静态方法，让线程从运行状态转变为等待状态。

sleep有两个方法重载：

- 第一个就是 native 修饰的，让线程转为等待状态的效果。
- 第二个是可以传入毫秒和一个纳秒的方法（如果纳秒值大于等于0.5毫秒，就给休眠的毫秒值 +1。如果传入的毫秒值是0，纳秒值不为0，就休眠1毫秒）。

sleep 会抛出一个 InterruptedException。

```java
public static void main(String[] args) throws InterruptedException {
    System.out.println(System.currentTimeMillis());
    Thread.sleep(1000);
    System.out.println(System.currentTimeMillis());
}
```

### 线程的强占

Thread 的非静态方法 join 方法。需要在某一个线程下去调用这个方法。

如果在 main 线程中调用了 t1.join()，那么 main 线程会进入到等待状态，需要等待 t1 线程全部执行完毕，在恢复到就绪状态等待 CPU 调度。

如果在 main 线程中调用了 t1.join(2000)，那么 main 线程会进入到等待状态，需要等待 t1 执行 2s 后，在恢复到就绪状态等待 CPU 调度。如果在等待期间，t1 已经结束了，那么 main 线程自动变为就绪状态等待 CPU 调度。

```java
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        for (int i = 0; i < 10; i++) {
            System.out.println("t1:" + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    });
    t1.start();
    for (int i = 0; i < 10; i++) {
        System.out.println("main:" + i);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        if (i == 1) {
            try {
                t1.join(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 守护线程

默认情况下，线程都是非守护线程。JVM 会在程序中没有非守护线程时，结束掉当前 JVM。主线程默认是非守护线程，如果主线程执行结束，需要查看当前 JVM 内是否还有非守护线程，如果 没有 JVM 直接停止。

```java
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        for (int i = 0; i < 10; i++) {
            System.out.println("t1:" + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    });
    t1.setDaemon(true);
    t1.start();
}
```

### 线程的等待和唤醒

可以让获取 synchronized 锁资源的线程通过 wait 方法进去到锁的**等待池**，并且会释放锁资源。

可以让获取 synchronized 锁资源的线程，通过 notify 或者 notifyAll 方法，将等待池中的线程唤醒，添加到**锁池**中。

notify 随机的唤醒等待池中的一个线程到锁池。

notifyAll 将等待池中的全部线程都唤醒，并且添加到锁池。

在调用 wait 方法和 notify 以及 norifyAll 方法时，必须在 synchronized 修饰的代码块或者方法内部才可以，因为要操作基于某个对象的锁的信息维护。

```java
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        sync();
    }, "t1");
    Thread t2 = new Thread(() -> {
        sync();
    }, "t2");
    t1.start();
    t2.start();
    Thread.sleep(12000);
    synchronized (MiTest.class) {
        MiTest.class.notifyAll();
    }
}

public static synchronized void sync() {
    try {
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                MiTest.class.wait();
            }
            Thread.sleep(1000);
            System.out.println(Thread.currentThread().getName());
        }
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}
```



## 线程的结束方式

线程结束方式很多，最常用就是让线程的 run 方法结束，无论是 return 结束，还是抛出异常结束，都可以。

### stop 方法（不用）

强制让线程结束，无论你在干嘛，不推荐使用当然当然方式，但是，他确实可以把线程干掉。

```java
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    });
    t1.start();
    Thread.sleep(500);
    t1.stop();
    System.out.println(t1.getState());
}
```

### 使用共享变量（很少会用）

这种方式用的也不多，有的线程可能会通过死循环来保证一直运行。咱们可以通过修改共享变量在破坏死循环，让线程退出循环，结束 run 方法。

```java
static volatile boolean flag = true;

public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        while (flag) {
            // 处理任务
        }
        System.out.println("任务结束");
    });
    t1.start();
    Thread.sleep(500);
    flag = false;
}
```

###  interrupt 方式

共享变量方式。

```java
public static void main(String[] args) throws InterruptedException {
    // 线程默认情况下， interrupt标记位：false
    System.out.println(Thread.currentThread().isInterrupted());
    // 执行interrupt之后，再次查看打断信息
    Thread.currentThread().interrupt();
    // interrupt标记位：ture
    System.out.println(Thread.currentThread().isInterrupted());
    // 返回当前线程，并归位为false interrupt标记位：ture
    System.out.println(Thread.interrupted());
    // 已经归位了
    System.out.println(Thread.interrupted());
    // =====================================================
    Thread t1 = new Thread(() -> {
        while (!Thread.currentThread().isInterrupted()) {
            // 处理业务
        }
        System.out.println("t1结束");
    });
    t1.start();
    Thread.sleep(500);
    t1.interrupt();
}
```

通过打断 WAITING 或者 TIMED_WAITING 状态的线程，从而抛出异常自行处理。这种停止线程方式是最常用的一种，在框架和 JUC 中也是最常见的。

```java
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        while (true) {
            // 获取任务
            // 拿到任务，执行任务
            // 没有任务了，让线程休眠
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
                System.out.println("基于打断形式结束当前线程");
                return;
            }
        }
    });
    t1.start();
    Thread.sleep(500);
    t1.interrupt();
}
```



## wait 和 sleep 的区别？

- 单词不一样。
- sleep 属于 Thread 类中的 static 方法、wait 属于 Object 类的方法。
- sleep 属于 TIMED_WAITING，自动被唤醒、wait 属于 WAITING，需要手动唤醒。
- sleep 方法在持有锁时，执行，不会释放锁资源、wait 在执行后，会释放锁资源。
- sleep 可以在持有锁或者不持有锁时，执行。 wait 方法必须在只有锁时才可以执行。

wait 方法会将持有锁的线程从 owner 扔到 WaitSet 集合中，这个操作是在修改 ObjectMonitor 对象，如果没有持有 synchronized 锁的话，是无法操作 ObjectMonitor 对象的。