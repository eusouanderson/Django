    window._se_plugin_version = '8.1.9';
    var em_version = '7.4.0';
    var em_track_user = true;
    var em_no_track_reason = '';

                    var disableStrs = [
                                                'ga-disable-UA-101323027-1',
                        ];

    /* Function to detect opted out users */
    function __gtagTrackerIsOptedOut() {
        for ( var index = 0; index < disableStrs.length; index++ ) {
            if ( document.cookie.indexOf( disableStrs[ index ] + '=true' ) > -1 ) {
                return true;
            }
        }

        return false;
    }

    /* Disable tracking if the opt-out cookie exists. */
    if ( __gtagTrackerIsOptedOut() ) {
        for ( var index = 0; index < disableStrs.length; index++ ) {
            window[ disableStrs[ index ] ] = true;
        }
    }

    /* Opt-out function */
    function __gtagTrackerOptout() {
        for ( var index = 0; index < disableStrs.length; index++ ) {
            document.cookie = disableStrs[ index ] + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
            window[ disableStrs[ index ] ] = true;
        }
    }

    if ( 'undefined' === typeof gaOptout ) {
        function gaOptout() {
            __gtagTrackerOptout();
        }
    }
                    window.dataLayer = window.dataLayer || [];

    window.ExactMetricsDualTracker = {
        helpers: {},
        trackers: {},
    };
    if ( em_track_user ) {
        function __gtagDataLayer() {
            dataLayer.push( arguments );
        }

        function __gtagTracker( type, name, parameters ) {
            if (!parameters) {
                parameters = {};
            }

            if (parameters.send_to) {
                __gtagDataLayer.apply( null, arguments );
                return;
            }

            if ( type === 'event' ) {

                                                parameters.send_to = exactmetrics_frontend.ua;
                    __gtagDataLayer( type, name, parameters );
                                        } else {
                __gtagDataLayer.apply( null, arguments );
            }
        }
        __gtagTracker( 'js', new Date() );
        __gtagTracker( 'set', {
            'developer_id.dNDMyYj' : true,
                                } );
                                                __gtagTracker( 'config', 'UA-101323027-1', {"forceSSL":"true"} );
                            window.gtag = __gtagTracker;											(function () {
                /* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
                /* ga and __gaTracker compatibility shim. */
                var noopfn = function () {
                    return null;
                };
                var newtracker = function () {
                    return new Tracker();
                };
                var Tracker = function () {
                    return null;
                };
                var p = Tracker.prototype;
                p.get = noopfn;
                p.set = noopfn;
                p.send = function (){
                    var args = Array.prototype.slice.call(arguments);
                    args.unshift( 'send' );
                    __gaTracker.apply(null, args);
                };
                var __gaTracker = function () {
                    var len = arguments.length;
                    if ( len === 0 ) {
                        return;
                    }
                    var f = arguments[len - 1];
                    if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
                        if ( 'send' === arguments[0] ) {
                            var hitConverted, hitObject = false, action;
                            if ( 'event' === arguments[1] ) {
                                if ( 'undefined' !== typeof arguments[3] ) {
                                    hitObject = {
                                        'eventAction': arguments[3],
                                        'eventCategory': arguments[2],
                                        'eventLabel': arguments[4],
                                        'value': arguments[5] ? arguments[5] : 1,
                                    }
                                }
                            }
                            if ( 'pageview' === arguments[1] ) {
                                if ( 'undefined' !== typeof arguments[2] ) {
                                    hitObject = {
                                        'eventAction': 'page_view',
                                        'page_path' : arguments[2],
                                    }
                                }
                            }
                            if ( typeof arguments[2] === 'object' ) {
                                hitObject = arguments[2];
                            }
                            if ( typeof arguments[5] === 'object' ) {
                                Object.assign( hitObject, arguments[5] );
                            }
                            if ( 'undefined' !== typeof arguments[1].hitType ) {
                                hitObject = arguments[1];
                                if ( 'pageview' === hitObject.hitType ) {
                                    hitObject.eventAction = 'page_view';
                                }
                            }
                            if ( hitObject ) {
                                action = 'timing' === arguments[1].hitType ? 'timing_complete' : hitObject.eventAction;
                                hitConverted = mapArgs( hitObject );
                                __gtagTracker( 'event', action, hitConverted );
                            }
                        }
                        return;
                    }

                    function mapArgs( args ) {
                        var arg, hit = {};
                        var gaMap = {
                            'eventCategory': 'event_category',
                            'eventAction': 'event_action',
                            'eventLabel': 'event_label',
                            'eventValue': 'event_value',
                            'nonInteraction': 'non_interaction',
                            'timingCategory': 'event_category',
                            'timingVar': 'name',
                            'timingValue': 'value',
                            'timingLabel': 'event_label',
                            'page' : 'page_path',
                            'location' : 'page_location',
                            'title' : 'page_title',
                        };
                        for ( arg in args ) {
                                                                    if ( ! ( ! args.hasOwnProperty(arg) || ! gaMap.hasOwnProperty(arg) ) ) {
                                hit[gaMap[arg]] = args[arg];
                            } else {
                                hit[arg] = args[arg];
                            }
                        }
                        return hit;
                    }

                    try {
                        f.hitCallback();
                    } catch ( ex ) {
                    }
                };
                __gaTracker.create = newtracker;
                __gaTracker.getByName = newtracker;
                __gaTracker.getAll = function () {
                    return [];
                };
                __gaTracker.remove = noopfn;
                __gaTracker.loaded = true;
                window['__gaTracker'] = __gaTracker;
            })();
                        } else {
                            console.log( "" );
        ( function () {
                function __gtagTracker() {
                    return null;
                }
                window['__gtagTracker'] = __gtagTracker;
                window['gtag'] = __gtagTracker;
        } )();
                        }


    window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/www.flashbang.com.br\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.9.8"}};
    !function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55358,56760,9792,65039],[55358,56760,8203,9792,65039]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);

    /* <![CDATA[ */
    var exactmetrics_frontend = {"js_events_tracking":"true","download_extensions":"zip,mp3,mpeg,pdf,docx,pptx,xlsx,rar","inbound_paths":"[{\"path\":\"\\\/go\\\/\",\"label\":\"affiliate\"},{\"path\":\"\\\/recommend\\\/\",\"label\":\"affiliate\"}]","home_url":"http:\/\/www.flashbang.com.br","hash_tracking":"false","ua":"UA-101323027-1","v4_id":""};
    /* ]]> */

