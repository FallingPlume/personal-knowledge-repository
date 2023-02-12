<img src="https://www.bisecthosting.com/images/CF/GeckoLib/bh_GL_header.png" alt=“logo”/>

<p align="center">
  <a href="https://discord.geckolib.com/" align="center"><img src="https://img.shields.io/discord/730912704776110121?color=green&label=Discord&logo=Discord&logoColor=green&style=for-the-badge" alt="discord"/></a> <a href="https://www.patreon.com/geckosmods"><img src="https://img.shields.io/endpoint.svg?url=https://shieldsio-patreon.vercel.app/api?username=geckosmods&type=patrons&style=for-the-badge&color=green&logoColor=green" alt="patreon"/> </a>
</p>

<h1 style="font-size:1.2vw" align="center">GeckoLib 4.0 是一个 Minecraft 模组的动画引擎，支持复杂的3D关键帧动画，30+ easings，并发动画支持，声音和粒子关键帧，事件关键帧等等。可用于 Forge 1.19.3+，Fabirc 1.19.3+，Quilt 1.19.3+。</h1>
<br>

<img src="https://geckolib.com/assets/images/bh_GL_2.png" alt="logo"/> 

<h1 style="font-size:1.2vw" align="center">你可以在 <a href="/geckolib">这里</a> 查看安装说明。</h1>

<br>

<img src="https://geckolib.com/assets/images/bh_GL_3.png" alt="logo"/> 

<h1 style="font-size:1.2vw" align="center">GeckoLib 4.0 以 <a href="https://github.com/bernie-g/geckolib/wiki/Installation_4.x">wiki</a> 的形式提供了详细的文档。我们花了很多时间写维基，所以请详细阅读它！</h1>

<br>

<img src="https://geckolib.com/assets/images/bh_GL_4.png" alt="logo"/> 

<h1 style="font-size:1.2vw" align="center">如果您有任何疑问或需要帮助，请加入我们的 Discord 吧！</h1>

<br>

<img src="https://geckolib.com/assets/images/bh_GL_5.png" alt="logo"/> 

<h1 style="font-size:1.2vw" align="center">欢迎拉取请求。如有重大变化，请先打开一个 issue 描述你想要如何更改。</h1>

<br>


<img src="https://geckolib.com/assets/images/bh_GL_6.png" alt="logo"/> 
<h3 align="center">
<img src="https://img.shields.io/github/license/bernie-g/geckolib?style=for-the-badge" alt="logo" height="70" /> 
</h3>



# Geckolib 3.x

## 安装

### 库的安装

要安装实际的 geckolib 库，请将这个依赖项片段插入到 build.gradle 中。

#### 对于 Quilt：

**Quilt 1.18**

```text
repositories {
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies {
        modImplementation 'software.bernie.geckolib:geckolib-quilt-1.18:3.0.45'
}
```

**Quilt 1.19.2**

```
repositories {
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies {
        modImplementation 'software.bernie.geckolib:geckolib-quilt-1.19:3.1.39'
}
```

示例：[https://github.com/AzureDoom/MCDoom/blob/quilt1.19/build.gradle](https://github.com/AzureDoom/MCDoom/blob/quilt1.19/build.gradle)

#### 对于 Fabirc：

**Fabric 1.16.5 UNSUPPORTED**

```
repositories {
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies {
        modImplementation 'software.bernie.geckolib:geckolib-fabric-1.16.5:3.0.107:dev'
}
```

示例：[https://github.com/AzureDoom/MCDoom/blob/fabric1.16/build.gradle](https://github.com/AzureDoom/MCDoom/blob/fabric1.16/build.gradle)

**Fabric 1.17 UNSUPPORTED**

```
repositories {
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies {
        modImplementation 'software.bernie.geckolib:geckolib-fabric-1.17:3.0.32'
}
```

示例：[https://github.com/AzureDoom/MCDoom/blob/fabric1.17/build.gradle](https://github.com/AzureDoom/MCDoom/blob/fabric1.17/build.gradle)

**Fabric 1.18**

```
repositories {
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies {
        modImplementation 'software.bernie.geckolib:geckolib-fabric-1.18:3.0.80'
}
```

示例：[https://github.com/AzureDoom/MCDoom/blob/fabric1.18/build.gradle](https://github.com/AzureDoom/MCDoom/blob/fabric1.18/build.gradle)

**Fabric 1.19.2**

```
repositories {
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies {
        modImplementation 'software.bernie.geckolib:geckolib-fabric-1.19:3.1.38'
}
```

示例：[https://github.com/AzureDoom/MCDoom/blob/fabric1.19/build.gradle]( https://github.com/AzureDoom/MCDoom/blob/fabric1.19/build.gradle)

#### 对于 Forge：

**Forge 1.12.2 UNSUPPORTED**

```
repositories{
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies{
        implementation fg.deobf('software.bernie.geckolib:geckolib-forge-1.12.2:3.0.31')
}
```

示例：[https://github.com/TeamChocoQuest/ChocolateQuestRepoured/blob/1.12.2/build.gradle](https://github.com/TeamChocoQuest/ChocolateQuestRepoured/blob/1.12.2/build.gradle)

**Forge 1.15.2 UNSUPPORTED**

```
repositories{
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies{
        compile fg.deobf('software.bernie.geckolib:geckolib-forge-1.15.2:3.0.46')
}
```

示例：[https://github.com/RealYusufIsmail/Ben-10-Mod/blob/1.15.x/build.gradle](https://github.com/RealYusufIsmail/Ben-10-Mod/blob/1.15.x/build.gradle)

**Forge 1.16.5 UNSUPPORTED**

```
repositories {
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies {
        implementation fg.deobf('software.bernie.geckolib:geckolib-forge-1.16.5:3.0.106')
}
```

示例：[https://github.com/AzureDoom/MCDoom/blob/forge1.16/build.gradle](https://github.com/AzureDoom/MCDoom/blob/forge1.16/build.gradle)

**Forge 1.17.1 UNSUPPORTED**

```
repositories{
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies{
        implementation fg.deobf('software.bernie.geckolib:geckolib-1.17.1-forge:3.0.15')
}
```

示例：[https://github.com/AzureDoom/MCDoom/blob/forge1.17/build.gradle](https://github.com/AzureDoom/MCDoom/blob/forge1.17/build.gradle)

**Forge 1.18**

```
repositories{
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies{
        implementation fg.deobf('software.bernie.geckolib:geckolib-forge-1.18:3.0.57')
}
```

示例：[https://github.com/AzureDoom/MCDoom/blob/forge1.18/build.gradle](https://github.com/AzureDoom/MCDoom/blob/forge1.18/build.gradle)

**Forge 1.19.2**

```
repositories{
        maven { url 'https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/' }
}
dependencies{
        implementation fg.deobf('software.bernie.geckolib:geckolib-forge-1.19:3.1.39')
}
```

示例：[https://github.com/AzureDoom/MCDoom/blob/forge1.19/build.gradle](https://github.com/AzureDoom/MCDoom/blob/forge1.19/build.gradle)

#### FAILURE

不要把它放在构建脚本部分！

### 安装 Blockbench 插件

1. 要安装这个插件，启动 Blockbench 并打开左上角的 File 菜单。
2. 选择 Plugins... 打开内置的插件浏览器。
3. 确保你是在可用标签，然后搜索插件。例如： `GeckoLib Animation Utils`
4. 一旦你找到了它，按下在你右手边的**安装**按钮。



## 开始使用

**此 wiki 假设你对 Java、 Minecraft、 Forge 或 Fabric 有基本的了解。您需要了解如何注册对象，阅读 Minecraft 源代码，以及自己调试问题。如果你还不了解这些, 可以考虑观看 [McJty's](https://wiki.mcjty.eu/modding/index.php?title=YouTube-Tutorials) 的教程。**

### 视频指南
<p>
<a href="http://www.youtube.com/watch?v=VlUwLXkwb2c"><img style="width: 30%" src="http://img.youtube.com/vi/VlUwLXkwb2c/0.jpg" />&nbsp;</a>
<a href="http://www.youtube.com/watch?v=lR4Mhd90Wj4"><img style="width: 30%" src="http://img.youtube.com/vi/lR4Mhd90Wj4/0.jpg" />&nbsp;</a>
<a href="http://www.youtube.com/watch?v=3srLEdFTgVI"><img style="width: 30%" src="http://img.youtube.com/vi/3srLEdFTgVI/0.jpg" />&nbsp;</a>
<a href="http://www.youtube.com/watch?v=95ds1eltUwU"><img style="width: 30%" src="http://img.youtube.com/vi/95ds1eltUwU/0.jpg" />&nbsp;</a>
</p>

### 创建一个模型

要创建一个新的 GeckoLib 模型，点击 `File` -> `New` -> `GeckoLib Animated Model`

要更改模型类型，点击`File` -> `GeckoLib Model Settings` 并选择你的物体类型。