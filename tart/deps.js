// This file was autogenerated by third_party/goog/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../../tart/Builder.js', ['tart.Builder'], ['tart.Err'], false);
goog.addDependency('../../../../tart/Carousel/Carousel.js', ['tart.Carousel', 'tart.Carousel.EventTypes'], ['goog.debug.ErrorHandler', 'goog.events.EventHandler', 'goog.events.EventTarget'], false);
goog.addDependency('../../../../tart/Carousel/spec/CarouselSpec.js', ['tart.Carousel.SpecRunner'], ['tart.Carousel'], false);
goog.addDependency('../../../../tart/CircularCarousel/CircularCarousel.js', ['tart.CircularCarousel'], ['goog.events.EventTarget', 'tart.Carousel'], false);
goog.addDependency('../../../../tart/CircularCarousel/spec/CircularCarouselSpec.js', ['tart.CircularCarousel.SpecRunner'], ['tart.CircularCarousel'], false);
goog.addDependency('../../../../tart/Collection.js', ['tart.Collection'], ['goog.array', 'goog.pubsub.PubSub', 'tart.Err'], false);
goog.addDependency('../../../../tart/DropdownList/DropdownBuilder.js', ['tart.DropdownBuilder'], ['tart.Builder'], false);
goog.addDependency('../../../../tart/DropdownList/DropdownList.js', ['tart.DropdownList'], ['tart.Collection', 'tart.DropdownBuilder'], false);
goog.addDependency('../../../../tart/Err.js', ['tart.Err'], ['tart'], false);
goog.addDependency('../../../../tart/FormValidator/FormValidator.js', ['tart.FormValidator'], ['tart.Validation'], false);
goog.addDependency('../../../../tart/FormValidator/spec/FormValidatorSpec.js', ['tart.FormValidator.SpecRunner'], ['tart.FormValidator'], false);
goog.addDependency('../../../../tart/List.js', ['tart.List'], ['tart.Collection'], false);
goog.addDependency('../../../../tart/Pagination/CircularPagination.js', ['tart.CircularPagination'], ['tart.Pagination'], false);
goog.addDependency('../../../../tart/Pagination/Pagination.js', ['tart.Pagination'], ['goog.debug.ErrorHandler', 'goog.events.EventHandler', 'goog.events.EventTarget'], false);
goog.addDependency('../../../../tart/Pagination/spec/PaginationSpec.js', ['tart.Pagination.SpecRunner'], ['tart.Pagination'], false);
goog.addDependency('../../../../tart/Registry.js', ['tart.Registry'], ['goog.structs.Map'], false);
goog.addDependency('../../../../tart/StateMachine/State.js', ['tart.State'], [], false);
goog.addDependency('../../../../tart/StateMachine/StateMachine.js', ['tart.StateMachine'], ['goog.array', 'goog.pubsub.PubSub', 'tart.State'], false);
goog.addDependency('../../../../tart/Tabs/TabPanel.js', ['tart.TabPanel'], ['goog.pubsub.PubSub'], false);
goog.addDependency('../../../../tart/Tabs/Tabs.js', ['tart.Tabs'], ['goog.pubsub.PubSub', 'tart.TabPanel'], false);
goog.addDependency('../../../../tart/Validation/Validation.js', ['tart.Validation', 'tart.Validation.has', 'tart.Validation.is'], [], false);
goog.addDependency('../../../../tart/Validation/spec/ValidationSpec.js', ['tart.Validation.SpecRunner'], ['tart.Validation'], false);
goog.addDependency('../../../../tart/XhrManager.js', ['tart.XhrManager'], [], false);
goog.addDependency('../../../../tart/base/Model.js', ['tart.base.Model'], ['goog.debug.ErrorHandler', 'goog.events.EventHandler', 'goog.events.EventTarget', 'goog.structs.Map'], false);
goog.addDependency('../../../../tart/base/plugin/BasePlugin.js', ['tart.base.plugin.BasePlugin'], ['goog.debug.ErrorHandler', 'goog.events.EventHandler', 'goog.events.EventTarget', 'goog.structs.Map'], false);
goog.addDependency('../../../../tart/base/plugin/Filter.js', ['tart.base.plugin.Filter'], ['tart.base.plugin.BasePlugin'], false);
goog.addDependency('../../../../tart/base/plugin/Pager.js', ['tart.base.plugin.Pager'], ['tart.Pagination', 'tart.base.plugin.BasePlugin'], false);
goog.addDependency('../../../../tart/base/plugin/Sorter.js', ['tart.base.plugin.Sorter'], ['tart.base.plugin.BasePlugin'], false);
goog.addDependency('../../../../tart/components/Carousel/Controller.js', ['tart.components.Carousel.Controller'], ['goog.events.EventTarget', 'tart.Pagination', 'tart.base.plugin.Pager', 'tart.components.Carousel.Model', 'tart.components.Carousel.Template', 'tart.components.Carousel.View', 'tart.components.Controller'], false);
goog.addDependency('../../../../tart/components/Carousel/Model.js', ['tart.components.Carousel.Model', 'tart.components.Carousel.Model.EventTypes'], ['goog.events.EventTarget', 'tart.Carousel', 'tart.base.Model', 'tart.dataProxy.CircularLocal'], false);
goog.addDependency('../../../../tart/components/Carousel/Template.js', ['tart.components.Carousel.Template'], [], false);
goog.addDependency('../../../../tart/components/Carousel/View.js', ['tart.components.Carousel.View'], ['tart.components.View'], false);
goog.addDependency('../../../../tart/components/Carousel/Widget.js', ['tart.components.Carousel.Widget'], ['tart.components.Carousel.Controller', 'tart.components.Widget'], false);
goog.addDependency('../../../../tart/components/Controller.js', ['tart.components.Controller'], ['tart.base.Model', 'tart.components.View'], false);
goog.addDependency('../../../../tart/components/RemoteModel.js', ['tart.components.models.RemoteModel'], ['tart.base.Model', 'tart.dataProxy.Xhr'], false);
goog.addDependency('../../../../tart/components/ThumbnailedCarousel/Model.js', ['tart.components.ThumbnailedCarousel.Model'], ['tart.components.Carousel.Model'], false);
goog.addDependency('../../../../tart/components/ThumbnailedCarousel/SpotController.js', ['tart.components.ThumbnailedCarousel.SpotController'], ['tart.CircularPagination', 'tart.components.Carousel.Controller', 'tart.components.ThumbnailedCarousel.Model', 'tart.components.ThumbnailedCarousel.SpotView', 'tart.components.ThumbnailedCarousel.ThumbnailsController', 'tart.components.ThumbnailedCarousel.ThumbnailsTemplate'], false);
goog.addDependency('../../../../tart/components/ThumbnailedCarousel/SpotTemplate.js', ['tart.components.ThumbnailedCarousel.SpotTemplate'], ['tart.components.Carousel.Template'], false);
goog.addDependency('../../../../tart/components/ThumbnailedCarousel/SpotView.js', ['tart.components.ThumbnailedCarousel.SpotView'], ['tart.components.Carousel.View', 'tart.components.ThumbnailedCarousel.SpotTemplate'], false);
goog.addDependency('../../../../tart/components/ThumbnailedCarousel/ThumbnailsController.js', ['tart.components.ThumbnailedCarousel.ThumbnailsController'], ['tart.CircularPagination', 'tart.components.Carousel.Controller', 'tart.components.ThumbnailedCarousel.ThumbnailsView'], false);
goog.addDependency('../../../../tart/components/ThumbnailedCarousel/ThumbnailsTemplate.js', ['tart.components.ThumbnailedCarousel.ThumbnailsTemplate'], ['tart.components.Carousel.Template'], false);
goog.addDependency('../../../../tart/components/ThumbnailedCarousel/ThumbnailsView.js', ['tart.components.ThumbnailedCarousel.ThumbnailsView'], ['tart.components.Carousel.View', 'tart.components.ThumbnailedCarousel.ThumbnailsTemplate'], false);
goog.addDependency('../../../../tart/components/ThumbnailedCarousel/Widget.js', ['tart.components.ThumbnailedCarousel.Widget'], ['tart.components.Carousel.Widget', 'tart.components.ThumbnailedCarousel.SpotController'], false);
goog.addDependency('../../../../tart/components/View.js', ['tart.components.View'], [], false);
goog.addDependency('../../../../tart/components/Widget.js', ['tart.components.Widget'], ['tart'], false);
goog.addDependency('../../../../tart/components/spec/ComponentsSpec.js', ['tart.components.SpecRunner'], ['tart.base.Model', 'tart.components.Controller', 'tart.components.View'], false);
goog.addDependency('../../../../tart/dataProxy/Abstract.js', ['tart.dataProxy.Abstract'], ['goog.structs.Map'], false);
goog.addDependency('../../../../tart/dataProxy/CircularLocal.js', ['tart.dataProxy.CircularLocal'], ['tart.dataProxy.Local'], false);
goog.addDependency('../../../../tart/dataProxy/Local.js', ['tart.dataProxy.Local'], ['goog.array', 'tart.dataProxy.Abstract'], false);
goog.addDependency('../../../../tart/dataProxy/Xhr.js', ['tart.dataProxy.Xhr'], ['tart.XhrManager', 'tart.dataProxy.Abstract'], false);
goog.addDependency('../../../../tart/date/DateRange.js', ['tart.date.DateRange'], ['goog.date.DateRange'], false);
goog.addDependency('../../../../tart/date/date.js', ['tart.date', 'tart.date.Date'], ['goog.date.DateTime', 'goog.i18n.DateTimeFormat', 'goog.math'], false);
goog.addDependency('../../../../tart/dom/dom.js', ['tart.dom'], [], false);
goog.addDependency('../../../../tart/events.js', ['tart.events'], [], false);
goog.addDependency('../../../../tart/events/GestureHandler.js', ['tart.events.GestureHandler'], ['goog.dom', 'goog.events.EventTarget', 'goog.math.Coordinate'], false);
goog.addDependency('../../../../tart/events/HoverHandler.js', ['tart.events.HoverHandler'], ['goog.dom', 'goog.events.EventTarget'], false);
goog.addDependency('../../../../tart/locale/en.js', ['tart.locale.en'], [], false);
goog.addDependency('../../../../tart/locale/locale.js', ['tart.locale'], ['tart.locale.en', 'tart.locale.tr'], false);
goog.addDependency('../../../../tart/locale/tr.js', ['tart.locale.tr'], [], false);
goog.addDependency('../../../../tart/mock/jQuery/xhr.js', ['tart.mock.jQuery.xhr'], [], false);
goog.addDependency('../../../../tart/money/Currency.js', ['tart.Currency'], [], false);
goog.addDependency('../../../../tart/money/CurrencyTL.js', ['tart.CurrencyTL'], ['tart.Currency'], false);
goog.addDependency('../../../../tart/money/CurrencyUSD.js', ['tart.CurrencyUSD'], ['tart.Currency'], false);
goog.addDependency('../../../../tart/money/Money.js', ['tart.Money'], ['tart.CurrencyTL', 'tart.CurrencyUSD'], false);
goog.addDependency('../../../../tart/mvc/Action.js', ['tart.mvc.Action'], [], false);
goog.addDependency('../../../../tart/mvc/Application.js', ['tart.mvc.Application'], ['goog.History', 'goog.debug.ErrorHandler', 'goog.events', 'tart.dom', 'tart.mvc.Action', 'tart.mvc.Controller', 'tart.mvc.IApplication', 'tart.mvc.Layout', 'tart.mvc.Model', 'tart.mvc.Renderer', 'tart.mvc.uri.Route', 'tart.mvc.uri.Router'], false);
goog.addDependency('../../../../tart/mvc/Controller.js', ['tart.mvc.Controller'], [], false);
goog.addDependency('../../../../tart/mvc/IApplication.js', ['tart.mvc.IApplication'], [], false);
goog.addDependency('../../../../tart/mvc/Layout.js', ['tart.mvc.Layout'], ['tart.mvc.View'], false);
goog.addDependency('../../../../tart/mvc/MobileAction.js', ['tart.mvc.MobileAction'], [], false);
goog.addDependency('../../../../tart/mvc/MobileRenderer.js', ['tart.mvc.MobileRenderer'], ['tart.mvc.MobileAction', 'tart.mvc.Renderer'], false);
goog.addDependency('../../../../tart/mvc/Model.js', ['tart.mvc.Model'], [], false);
goog.addDependency('../../../../tart/mvc/Renderer.js', ['tart.mvc.Renderer'], ['tart.mvc.Action', 'tart.mvc.Layout', 'tart.mvc.View', 'tart.mvc.uri.Redirection'], false);
goog.addDependency('../../../../tart/mvc/View.js', ['tart.mvc.View'], [], false);
goog.addDependency('../../../../tart/mvc/mvc.js', ['tart.mvc'], ['tart.mvc.Application'], false);
goog.addDependency('../../../../tart/mvc/test/Bootstrapper.js', ['mvcapp.Bootstrapper'], ['mvcapp.Application'], false);
goog.addDependency('../../../../tart/mvc/test/application/controllers/GamesController.js', ['mvcapp.controllers.GamesController'], ['mvcapp.views.layouts.rare', 'mvcapp.views.scripts.games.index', 'mvcapp.views.scripts.games.list', 'tart.mvc.Controller'], false);
goog.addDependency('../../../../tart/mvc/test/application/controllers/IndexController.js', ['mvcapp.controllers.IndexController'], ['mvcapp.views.scripts.index.list', 'tart.mvc.Controller'], false);
goog.addDependency('../../../../tart/mvc/test/application/mvcapp.js', ['mvcapp.Application'], ['mvcapp.controllers.GamesController', 'mvcapp.controllers.IndexController', 'mvcapp.views.layouts.common', 'tart.mvc'], false);
goog.addDependency('../../../../tart/mvc/test/application/views/layouts/common.js', ['mvcapp.views.layouts.common'], [], false);
goog.addDependency('../../../../tart/mvc/test/application/views/layouts/rare.js', ['mvcapp.views.layouts.rare'], [], false);
goog.addDependency('../../../../tart/mvc/test/application/views/scripts/games/index.js', ['mvcapp.views.scripts.games.index'], [], false);
goog.addDependency('../../../../tart/mvc/test/application/views/scripts/games/list.js', ['mvcapp.views.scripts.games.list'], [], false);
goog.addDependency('../../../../tart/mvc/test/application/views/scripts/index/list.js', ['mvcapp.views.scripts.index.list'], [], false);
goog.addDependency('../../../../tart/mvc/uri/Redirection.js', ['tart.mvc.uri.Redirection'], [], false);
goog.addDependency('../../../../tart/mvc/uri/Request.js', ['tart.mvc.uri.Request'], ['goog.Uri'], false);
goog.addDependency('../../../../tart/mvc/uri/Route.js', ['tart.mvc.uri.Route'], ['tart.Err'], false);
goog.addDependency('../../../../tart/mvc/uri/Router.js', ['tart.mvc.uri.Router'], ['goog.array', 'goog.object', 'tart.mvc.uri.Redirection', 'tart.mvc.uri.Request'], false);
goog.addDependency('../../../../tart/storage/Storage.js', ['tart.storage.Storage'], ['goog.json'], false);
goog.addDependency('../../../../tart/string/string.js', ['tart.string'], [], false);
goog.addDependency('../../../../tart/tart.js', ['tart'], [], false);
goog.addDependency('../../../../tart/ui/Component.js', ['tart.ui.Component'], ['goog.events.EventTarget', 'tart', 'tart.dom'], false);
goog.addDependency('../../../../tart/ui/ComponentManager.js', ['tart.ui.ComponentManager'], ['goog.array', 'goog.events.EventType', 'tart.events', 'tart.events.GestureHandler', 'tart.events.HoverHandler'], false);
goog.addDependency('../../../../tart/ui/ComponentModel.js', ['tart.ui.ComponentModel'], ['goog.events.EventTarget'], false);
goog.addDependency('../../../../tart/ui/DlgComponent.js', ['tart.ui.DlgComponent'], ['goog.events.EventTarget', 'tart', 'tart.dom', 'tart.ui.ComponentManager'], false);
goog.addDependency('../../../../tart/ui/InfiniteScroll/InfiniteScrollComponent.js', ['tart.ui.InfiniteScrollComponent'], ['goog.async.Throttle', 'tart.ui.DlgComponent', 'tart.ui.InfiniteScrollComponentModel'], false);
goog.addDependency('../../../../tart/ui/InfiniteScroll/InfiniteScrollComponentModel.js', ['tart.ui.InfiniteScrollComponentModel'], ['tart.ui.ComponentModel'], false);
goog.addDependency('../../../../tart/ui/NavBar/NavBarComponent.js', ['tart.ui.NavBarComponent'], ['tart.ui.DlgComponent'], false);
goog.addDependency('../../../../tart/ui/PullToRefresh/P2RComponent.js', ['tart.ui.P2RComponent'], ['goog.async.Throttle', 'tart.ui.DlgComponent', 'tart.ui.P2RComponentModel'], false);
goog.addDependency('../../../../tart/ui/PullToRefresh/P2RComponentModel.js', ['tart.ui.P2RComponentModel'], ['tart.ui.ComponentModel'], false);
goog.addDependency('../../../../tart/ui/Sidebar/SidebarComponent.js', ['tart.ui.SidebarComponent'], ['tart.ui.DlgComponent'], false);
goog.addDependency('../../../../tart/ui/TabBar/TabBarView.js', ['tart.ui.TabBarView'], ['tart.ui.View'], false);
goog.addDependency('../../../../tart/ui/View.js', ['tart.ui.View'], ['tart.ui.DlgComponent', 'tart.ui.ViewManager'], false);
goog.addDependency('../../../../tart/ui/ViewManager.js', ['tart.ui.ViewManager'], ['goog.math'], false);
goog.addDependency('../../../../tart/ui/ViewModel.js', ['tart.ui.ViewModel'], ['tart.ui.ComponentModel'], false);
goog.addDependency('../../../../tart/ui/input/DateComponent.js', ['tart.ui.input.DateComponent'], ['goog.events.EventTarget', 'tart.ui.DlgComponent'], false);
goog.addDependency('../../../../tart/ui/input/RevealingPassword.js', ['tart.ui.input.RevealingPassword'], ['tart.ui.DlgComponent'], false);
goog.addDependency('../../../../tart/ui/tooltip/TooltipComponent.js', ['tart.ui.TooltipComponent'], ['goog.dom', 'goog.style', 'tart.ui.Component', 'tart.ui.TooltipComponentModel'], false);
goog.addDependency('../../../../tart/ui/tooltip/TooltipComponentModel.js', ['tart.ui.TooltipComponentModel'], ['tart.StateMachine', 'tart.ui.ComponentModel'], false);