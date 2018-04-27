var _user$project$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: window.innerWidth,
		height: window.innerHeight
	}));
});

var scrollTo = function(x, y) {
  return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
    window.scrollTo(x, y);
    callback(_elm_lang$core$Native_Scheduler.succeed());
  });
};

var scrollToElement = function(id) {
  return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
    if (document.getElementById(id)) {
      document.getElementById(id).scrollIntoView();
      callback(_elm_lang$core$Native_Scheduler.succeed());
    } else {
      callback(_elm_lang$core$Native_Scheduler.fail({ctor: "ElementNotFound"}));
    }
  });
};

var open = function(url) {
  return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
    window.open(url);
    callback(_elm_lang$core$Native_Scheduler.succeed());
  });
};
  
return {
  size: size,
  scrollTo: F2(scrollTo),
  scrollToElement: scrollToElement,
	open: open
};

}();
