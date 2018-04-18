$(function() {
    var tabSliders = {
        tabContent: $('.section-5 .tab-pane'),
        tabs: $('.section-5 .nav-tabs li a'),
        resizeTimeout: null,
        sliderIsInit: false,
        init: function () {
            this.createSliderBehavior();
            this.addEvents();
        },
        createSliderBehavior: function () {
            this.checkSliderInitialization();
        },
        checkSliderInitialization: function () {
            if (window.innerWidth > 991) {
                if(this.slidersIsInit) {
                    this.slidersIsInit = false;
                    this.destroyTabsSliders();
                }
            } else {
                if (!this.slidersIsInit) {
                    this.slidersIsInit = true;
                    this.createTabsSliders();
                }
            }
        },
        createTabsSliders: function () {
            this.tabContent.slick({
                arrows: false,
                dots: true,
                infinite: true,
                autoplay: true
            })
        },
        destroyTabsSliders: function () {
            this.tabContent.slick('unslick');
        },
        reInitSliders: function () {
            var self = this;
            if (this.slidersIsInit) {
                 self.destroyTabsSliders();
                 self.createTabsSliders();
              }
        },
        addEvents: function () {
            var self = this;
            $(window).on('resize', function () {
            clearTimeout(self.resizeTimeout);
               self.resizeTimeout = setTimeout(function () { self.checkSliderInitialization();
            }, 100);
        });
        
        this.tabs.on('shown.bs.tab', function () {
        self.reInitSliders();
        });
    }
}
  
  tabSliders.init();
});