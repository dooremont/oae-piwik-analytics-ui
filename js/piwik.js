/*!
 * Copyright 2014 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

define(['jquery', 'oae.core'], function($, oae) {

/*
* Piwik module
*/
    return function(uid, showSettings, widgetData) {
        var piwikAnalytics = function() {
    // Get the Piwik Analytics configuration
             var globalEnabled = oae.api.config.getValue('oae-piwik-analytics', 'piwik-analytics', 'globalEnabled')
             var globalTrackingUrl = oae.api.config.getValue('oae-piwik-analytics','piwik-analytics','globalTrackingUrl');
             var globalTrackingId = oae.api.config.getValue('oae-piwik-analytics','piwik-analytics','globalTrackingId');
                if (globalEnabled){
                var piwik_script='<script type="text/javascript">var _paq = _paq || [];_paq.push(["trackPageView"]);_paq.push(["enableLinkTracking"]);(function() {var u=(("https:" == document.location.protocol) ? "https" : "http") + "://'+globalTrackingUrl+'/";_paq.push(["setTrackerUrl", u+"piwik.php"]);_paq.push(["setSiteId", '+globalTrackingId+']);var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);})();</script>';
                var texte='<img src="http://'+globalTrackingUrl+'/piwik.php?idsite='+globalTrackingId+'&rec=1" style="border:0" alt="" />';
                $("body").append(piwik_script+texte);
            }
       
        };
    
    piwikAnalytics();

    };

});
