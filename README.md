# 一个响应式网站练习
素材是从网上扒拉下来的，这个练习主要目的就是熟悉响应式布局，根据素材里面的响应式图片我把分割点选为了800px和480px    

## to-do
现在还剩移动端的一点工作，需要实现左滑和右滑ad部分图片的效果，使用touch事件。

## 练习笔记
### 静态布局笔记
html5+css3    
- 第一次section和div混用，section和div的用法区别:    
> section元素表示文档或应用的一个部分。所谓“部分”，这里是指按照主题分组的内容区域，通常会**带有标题**。【也就是每个section对应不同的主题。注意是内容本身的主题，而不是其他人为设定的划分标准。】
section的例子包括书的章节回目、多tab对话框的每个tab页、论文以数字编号的小节。网站的主页可能分成介绍、最新内容、联系信息等section。
于是我现在的理解是:有标题的独立区块用section，其它用div.
- 一个很重要的点:media query中条件里面的相对单位em是相对于浏览器默认字体大小的

### js笔记
这次兼容了移动端，一个点就是onclick不管用了，需要转向touch事件的处理，touch事件中event对象存储的事件对应的坐标是pageX而非clienX,这样写:    
```js
event.changedTouches[0].pageX;
```
##BUG修复
发现在safari下picture标签是不被识别的，于是响应式图片就狗带了，为此引入了一个插件:    
> (picturefill.js)[http://scottjehl.github.io/picturefill/]
引入后，完美兼容safari,噢耶！

