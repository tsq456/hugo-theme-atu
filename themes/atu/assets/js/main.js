// scrollspy
myID = document.getElementById("toc");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 400) {
    myID.classList.add("show")
    myID.classList.remove("hidden")
  } else {
    myID.classList.add("hidden")
    myID.classList.remove("show")
  }
};
window.addEventListener("scroll", myScrollFunc);

// Tocbot Setting
tocbot.init({
    // Where to render the table of contents.
    tocSelector: '#toc',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.content',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h1, h2, h3',
    // For headings inside relative or absolute positioned containers within content.
    hasInnerContainers: true,
    scrollSmooth: true,
  });

//   mediumZoom Setting
mediumZoom('.zoom', {
    margin:20,
    background:'#fff',
})

// Lazyload Setting
var myLazyLoad = new LazyLoad();
myLazyLoad.update();