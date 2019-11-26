(function ($, window, document, undefined) {

  var Shutter = function (elem, options) {

    this.defaults = {
      shutterW: options.shutterW,
      shutterH: options.shutterH,
      isAutoPlay: false,
      playInterval: 3000,
      curDisplay: 0,
      fullPage: false
    }
    this.opts = $.extend({}, this.defaults, options);
    this.inital(elem);
  };

  Shutter.prototype = {
    play: function () {
      var self = this;

      if (this.opts.isAutoPlay) {
        clearInterval(this.playTime);

        this.playTime = setInterval(function () {
          self.$nextBtn.click();
        }, this.opts.playInterval);
      }
    },

    moveSwitch: function (randomNum, command, index) {
      var imgHeight = window.document.body.offsetWidth*0.29167;
      var imgWidth = window.document.body.offsetWidth;

      switch (randomNum) {
        case 0:
          this.gridOpacity(index, imgWidth, imgHeight);
        break;
        case 1:
          this.gridLittle(index, imgWidth, imgHeight);
        break;
        case 2:
          this.gridOpacity(index, imgWidth, imgHeight);
        break;
        case 3:
          this.gridLittle(index, imgWidth, imgHeight);
        break;
        default:
          this.gridOpacity(index, imgWidth, imgHeight);
        break;
      }
    },

    toggleMove: function (command, index) {
      if (!command) {
        if (this.curDisplay === index) {
          return;
        } else if (this.curDisplay === 0 && index === this.shutterItem_len - 1
                  || index < this.curDisplay) {
          command = 'prev';
        } else {
          command = 'next';
        }
      }

      if (!index) {
        if (command === 'prev') {
          index = this.curDisplay - 1;

          if (this.curDisplay === 0) {
            index = this.shutterItem_len - 1;
          }
        } else {
          index = this.curDisplay + 1;

          if (this.curDisplay === this.shutterItem_len - 1) {
            index = 0;
          }
        }
        if (index === 0) {
            $(".shutter-btn").find(".one").addClass("banner-icon-hover");
            $(".shutter-btn").find(".two,.three,.four,.five").removeClass("banner-icon-hover");
        } else if (index === 1) {
            $(".shutter-btn").find(".two").addClass("banner-icon-hover");
            $(".shutter-btn").find(".one,.three,.four,.five").removeClass("banner-icon-hover");
        } else if (index === 2) {
            $(".shutter-btn").find(".three").addClass("banner-icon-hover");
            $(".shutter-btn").find(".two,.one,.four,.five").removeClass("banner-icon-hover");
        } else if (index === 3) {
            $(".shutter-btn").find(".four").addClass("banner-icon-hover");
            $(".shutter-btn").find(".two,.three,.one,.five").removeClass("banner-icon-hover");
        } else if (index === 4) {
            $(".shutter-btn").find(".five").addClass("banner-icon-hover");
            $(".shutter-btn").find(".two,.three,.one,.four").removeClass("banner-icon-hover");
        }
      } else {
        index = index - 1;
      }

      // var random = function (min, max) {
      //   return Math.floor(Math.random() * (max + 1) - min);
      // };

      if(this.curDisplay === 1) {
        // this.$bannerAnimation.style.display = "none";
        // this.$apiIconAnimation.style.display = "none";
        // this.$apiIconAnimation.style.zIndex = 5;
      }

      this.moveSwitch(index, command, index);
      if(index === 1){
        // this.$bannerAnimation.style.display = "block";
        // this.$apiIconAnimation.style.display = "block";
        // this.$apiIconAnimation.style.zIndex = 21;
      }
    },

    initalShutter: function () {
      var $curElem = this.$shutterItem.eq(this.curDisplay);
      var $nearlyElem = this.$shutterItem.not($curElem);

      $curElem.css('zIndex', 20);
      $nearlyElem.each(function (i) {
        $(this).css('zIndex', ++ i);
      });

      this.$shutter.css({width: this.opts.shutterW, height: this.opts.shutterH});

      if (this.opts.fullPage) {
        this.$shutter.css({
          width: $(window).width(),
          height: $(window).height(),
          margin: 0,
          borderRadius: 0,
          border: 'none'
        });
      }
    },

    inital: function (elem) {
      var self = this;
      this.$shutter = elem;
      this.$shutterItem = this.$shutter.find('.shutter-img a');
      this.$nextBtn = this.$shutter.find('.shutter-btn .next');
      this.$shutterNav = this.$shutter.find('.shutter-nav li');
      this.$shutterBannerIcon = this.$shutter.find('.shutter-btn .banner-circleIcon');
      // this.$bannerAnimation = document.getElementById('bannerAnimation');
      this.$apiIconAnimation = document.getElementById('apiIconAnimation');

      this.shutterItem_len = this.$shutterItem.length;
      this.curDisplay = this.opts.curDisplay > this.shutterItem_len - 1 ? this.opts.curDisplay = this.shutterItem_len - 1 : this.opts.curDisplay;
      this.b_stop = true;
      this.playTime = null;

      this.initalShutter();

      this.shutterW = this.$shutter.width();
      this.shutterH = this.$shutter.height();

      this.$nextBtn.bind('click', function () {
        if (self.b_stop) {
          self.b_stop = false;
          self.toggleMove('next');
        }
      });

      this.$shutterBannerIcon.bind('click', function () {
          var bannerIndex = 0;
          if (self.b_stop) {
              self.b_stop = false;

              if ($(this).hasClass("one")) {
                  bannerIndex = 1;
                  $(this).addClass("banner-icon-hover");
                  $(".shutter-btn").find(".two,.three,.four,.five").removeClass("banner-icon-hover");
              } else if ($(this).hasClass("two")) {
                  bannerIndex = 2;
                  $(this).addClass("banner-icon-hover");
                  $(".shutter-btn").find(".one,.three,.four,.five").removeClass("banner-icon-hover");
              } else if ($(this).hasClass("three")) {
                  bannerIndex = 3;
                  $(this).addClass("banner-icon-hover");
                  $(".shutter-btn").find(".one,.two,.four,.five").removeClass("banner-icon-hover");
              } else if ($(this).hasClass("four")) {
                  bannerIndex = 4;
                  $(this).addClass("banner-icon-hover");
                  $(".shutter-btn").find(".one,.two,.three,.five").removeClass("banner-icon-hover");
              } else if ($(this).hasClass("five")) {
                  bannerIndex = 5;
                  $(this).addClass("banner-icon-hover");
                  $(".shutter-btn").find(".one,.two,.three,.four").removeClass("banner-icon-hover");
              }

              self.toggleMove('next', bannerIndex);
          }
      });

      if (this.opts.fullPage) {
        $(window).resize(function () {
          setTimeout(function () {
            self.$shutter.css({width: $(this).width(), height: $(this).height()});

            self.shutterW = self.$shutter.width();
            self.shutterH = self.$shutter.height();
          }, 30);
        });
      }


      this.play();
      this.$shutter.hover(function () {
        clearInterval(self.playTime);
      }, function () {
        self.play();
      });
    },


    // 图片切换方法
    recovery: function (target, cur, index, backup, interval) {
      var self = this;

      setTimeout(function () {
        target.css('zIndex', 20);
        cur.css('zIndex', self.curDisplay).html(backup);
        self.curDisplay = index;
        self.b_stop = true;
      }, interval);
    },

    gridOpacity: function (index, imgW, imgH) {
      var self = this;
      var $curElem = this.$shutterItem.eq(this.curDisplay);
      var $targetElem = this.$shutterItem.eq(index);
      var backup = $curElem.html();
      var $createElem = $('<div class="created"></div>');

      $curElem.css({width: imgW + 'px',height: imgH + 'px', overflow: 'hidden'});
      $targetElem.css({'zIndex': 19, overflow: 'hidden',width: imgW + 'px', height: imgH + 'px'});
      $curElem.find('img').fadeOut();

      $createElem.html(backup).css({
        position: 'absolute',
        zIndex: 20,
        left: 0,
        top: 0,
        overflow: 'hidden',
        width: imgW,
        height: imgH,
        opacity: 1
      });

      $createElem.find('img').css({
        display: 'block',
        width: imgW,
        height: imgH
      });

      $curElem.append($createElem);

      $createElem.velocity({opacity: 0}, {duration: 1000});

      this.recovery($targetElem, $curElem, index, backup, 1000);
    },

    gridLittle: function (index, imgW, imgH) {
      var self = this;
      var $curElem = this.$shutterItem.eq(this.curDisplay);
      var $targetElem = this.$shutterItem.eq(index);
      var backup = $curElem.html();
      var coordinate = null;
      $curElem.css({width: imgW + 'px',height: imgH + 'px', overflow: 'hidden'});
      $targetElem.css({'zIndex': 19, overflow: 'hidden', width: imgW + 'px', height: imgH + 'px'});
      $curElem.find('img').fadeOut();

      for (var i = 0; i < 24; i ++) {
        var $createElem = $('<div class="created"></div>');

        $createElem.html(backup).css({
          width: imgW / 6,
          height: imgH / 4,
          left: (imgW / 6) * (i % 6),
          top: (imgH / 4) * Math.floor(i / 6)
        });

        $curElem.append($createElem);

        $createElem.find('img').css({
          display: 'block',
          width: imgW,
          height: imgH,
          marginLeft: -(imgW / 6) * (i % 6),
          marginTop: -(imgH / 4) * Math.floor(i / 6)
        });
      }

      coordinate = getXY($curElem.find('.created'), 4, 6);

      tab(coordinate, 0, 0, function () {
        var left = parseInt(this.style.left);
        var top = parseInt(this.style.top);

        $(this).velocity({
          left: left + 100,
          top: top + 100,
          opacity: 0
        });
      }, 100, +1, +1);

      this.recovery($targetElem, $curElem, index, backup, 1200);
    },

    constructor: Shutter
  };

  $.fn.shutter = function (options) {
    this.each(function () {
      var shutter = new Shutter($(this), options);
    });
  };

})(jQuery, window, document);

function tab(arr, x, y, fn, delay, speedX, speedY) {
  if (!arr[y] || !arr[y][x]) {
    return;
  }

  if (fn) {
    fn.call(arr[y][x]);

    clearTimeout(arr[y][x].timer);
    arr[y][x].timer = setTimeout(function () {
      tab(arr, x, y + speedY, fn, delay, speedX, speedY);
      tab(arr, x + speedX, y, fn, delay, speedX, speedY);
    }, delay);
  }
};

function getXY(objs, rows, cols) {
  var arr1 = [];

  for (var i = 0; i < rows; i ++) {
    var arr2 = [];

    for (var j = 0; j < cols; j ++) {
      objs[i * cols + j].xIndex = j;
      objs[i * cols + j].yIndex = i;

      arr2.push(objs[i * cols + j]);
    }

    arr1.push(arr2);
  }

  return arr1;
};