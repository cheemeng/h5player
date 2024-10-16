import{_ as e,c as i,o as a,a5 as l}from"./chunks/framework.gwyxBWs1.js";const f=JSON.parse('{"title":"Update Log","description":"","frontmatter":{},"headers":[],"relativePath":"home/changeLog.md","filePath":"home/changeLog.md","lastUpdated":1729085226000}'),t={name:"home/changeLog.md"},o=l('<h1 id="update-log" tabindex="-1">Update Log <a class="header-anchor" href="#update-log" aria-label="Permalink to &quot;Update Log&quot;">​</a></h1><h2 id="_4-3-0-2024-10-16" tabindex="-1">4.3.0 [2024/10/16] <a class="header-anchor" href="#_4-3-0-2024-10-16" aria-label="Permalink to &quot;4.3.0 [2024/10/16]&quot;">​</a></h2><ul><li>Disable recommended modules to let the script focus on core functions.</li><li>Adjust the menu order to facilitate global shutdown of the graphical interface.</li></ul><h2 id="_4-2-8-2024-08-01" tabindex="-1">4.2.8 [2024/08/01] <a class="header-anchor" href="#_4-2-8-2024-08-01" aria-label="Permalink to &quot;4.2.8 [2024/08/01]&quot;">​</a></h2><ul><li>Optimize the underlying hook logic to reduce false positives.</li><li>Solve the issue with Cloudflare CAPTCHA validation anomalies.</li></ul><h2 id="_4-2-7-2024-05-24" tabindex="-1">4.2.7 [2024/05/24] <a class="header-anchor" href="#_4-2-7-2024-05-24" aria-label="Permalink to &quot;4.2.7 [2024/05/24]&quot;">​</a></h2><ul><li>Solve the issue of not being able to pass Cloudflare&#39;s CAPTCHA verification.</li></ul><h2 id="_4-2-6-2024-05-01" tabindex="-1">4.2.6 [2024/05/01] <a class="header-anchor" href="#_4-2-6-2024-05-01" aria-label="Permalink to &quot;4.2.6 [2024/05/01]&quot;">​</a></h2><ul><li>Fix the issue of inaccessible Chinese document guidance.</li></ul><h2 id="_4-2-5-2024-04-18" tabindex="-1">4.2.5 [2024/04/18] <a class="header-anchor" href="#_4-2-5-2024-04-18" aria-label="Permalink to &quot;4.2.5 [2024/04/18]&quot;">​</a></h2><ul><li>Added a frequently asked questions menu option.</li><li>Fixed the URL paths for other document links.</li></ul><h2 id="_4-2-4-2024-03-29" tabindex="-1">4.2.4 [2024/03/29] <a class="header-anchor" href="#_4-2-4-2024-03-29" aria-label="Permalink to &quot;4.2.4 [2024/03/29]&quot;">​</a></h2><ul><li>Added a switch configuration option for the mouse control module.</li><li>Added a configuration option for the effective time of long-pressing the mouse.</li><li>Optimized the default parameter options for the default custom configuration.</li><li>Enhanced the categorization and display logic of the menu options.</li></ul><h2 id="_4-2-3-2024-03-02" tabindex="-1">4.2.3 [2024/03/02] <a class="header-anchor" href="#_4-2-3-2024-03-02" aria-label="Permalink to &quot;4.2.3 [2024/03/02]&quot;">​</a></h2><ul><li>Added mouse control module, planning to enhance the mouse control capability in the future</li><li>Redefined the data structure of the blacklist, adding urls and domains as two global blacklists</li><li>Refactored the script disabling logic for a specific domain to enable custom editing of the disable list configuration</li><li>Modified the default recommendation configuration list, discarding irrational old recommendations</li><li>Corrected the show/hide logic of the script disabling menu, ensuring normal enable/disable of the script under any website</li></ul><h2 id="_4-2-2-2024-02-29" tabindex="-1">4.2.2 [2024/02/29] <a class="header-anchor" href="#_4-2-2-2024-02-29" aria-label="Permalink to &quot;4.2.2 [2024/02/29]&quot;">​</a></h2><ul><li>Added URL exclusion configuration options, allowing for more refined configuration</li><li>Added the B site homepage to the URL exclusion to fix severe memory leaks on the homepage reported by some users</li></ul><h2 id="_4-2-1-2024-02-28" tabindex="-1">4.2.1 [2024/02/28] <a class="header-anchor" href="#_4-2-1-2024-02-28" aria-label="Permalink to &quot;4.2.1 [2024/02/28]&quot;">​</a></h2><ul><li>Optimized disable logic to thoroughly disable scripts on individual websites</li><li>Removed the shortcut key disabling script logic, solving issues with too many interfering logics</li><li>Optimized some abnormal interactive logic in the UI</li></ul><h2 id="_4-2-0-2024-02-26" tabindex="-1">4.2.0 [2024/02/26] <a class="header-anchor" href="#_4-2-0-2024-02-26" aria-label="Permalink to &quot;4.2.0 [2024/02/26]&quot;">​</a></h2><ul><li>Improved support for non-Greasemonkey plugins to enhance compatibility</li><li>Removed the looping scrolling logic of the recommendation module to improve user experience</li><li>Adjusted the rendering logic of the recommendation module to downplay the display effect</li><li>Added control logic for disabling UI options in the Greasemonkey menu</li><li>Optimized download save logic to reduce filename input</li><li>Internationalized the download module prompts</li></ul><h2 id="_4-1-0-2024-02-22" tabindex="-1">4.1.0 [2024/02/22] <a class="header-anchor" href="#_4-1-0-2024-02-22" aria-label="Permalink to &quot;4.1.0 [2024/02/22]&quot;">​</a></h2><ul><li>Added a module for actively reading configuration information from the official website</li><li>Added logic to prevent UI rendering deadlocks</li><li>Optimized the display logic of the UI to reduce toolbar interference</li><li>Adjusted the display order of the UI close button</li><li>Fixed the issue with global configuration write exceptions</li><li>Fixed the issue with YouTube subtitles not following properly</li><li>Added the @antifeature tag as needed</li></ul><h2 id="_4-0-1-2024-02-19" tabindex="-1">4.0.1 [2024/02/19] <a class="header-anchor" href="#_4-0-1-2024-02-19" aria-label="Permalink to &quot;4.0.1 [2024/02/19]&quot;">​</a></h2><ul><li>Added the @antifeature according to the community rules, being proactive</li><li>Resolved the issue of being reported because the free GPT-4 was promoted in carousel ads (it&#39;s honestly free!)</li><li>Currently, no plans to add a series of &quot;features&quot; with the @antifeature tag</li><li>But, some promotional links that won&#39;t affect the user experience might be added</li></ul><h2 id="_4-0-0-2024-02-15" tabindex="-1">4.0.0 [2024/02/15] <a class="header-anchor" href="#_4-0-0-2024-02-15" aria-label="Permalink to &quot;4.0.0 [2024/02/15]&quot;">​</a></h2><ul><li>Added a visual UI operation interface, lowering the usage threshold and improving operational convenience</li><li>Implemented support for adjusting speed in mobile browsers (update of user document will follow)</li><li>Improved the video download feature, significantly enhancing streaming extraction capability for more websites</li><li>Perfected the settings option feature, allowing for more refined configuration</li><li>Optimized the memory usage of experimental features and performed overall performance tuning</li><li>Fixed a series of known issues (But the addition of the UI interface may also introduce more potential issues)</li></ul><h2 id="_3-7-12-2024-01-19" tabindex="-1">3.7.12 [2024/01/19] <a class="header-anchor" href="#_3-7-12-2024-01-19" aria-label="Permalink to &quot;3.7.12 [2024/01/19]&quot;">​</a></h2><ul><li>Fixed the issue of oversized jpg files when saving screenshots</li><li>Fixed the problem of passing screenshots to the clipboard being ineffective</li></ul><h2 id="_3-7-11-2024-01-04" tabindex="-1">3.7.11 [2024/01/04] <a class="header-anchor" href="#_3-7-11-2024-01-04" aria-label="Permalink to &quot;3.7.11 [2024/01/04]&quot;">​</a></h2><ul><li>Added script logic to automatically skip Youtube ads</li><li>Fixed the problem of the underlying shortcut key library not supporting multiple window object bindings</li><li>Solved the problem of unable to pass shortcuts on iframe nested websites</li></ul><h2 id="_3-7-10-2024-01-03" tabindex="-1">3.7.10 [2024/01/03] <a class="header-anchor" href="#_3-7-10-2024-01-03" aria-label="Permalink to &quot;3.7.10 [2024/01/03]&quot;">​</a></h2><ul><li>Added the function of remembering the historical playback speed</li><li>Optimized the visibility logic of the progress bar when YouTube is paused</li><li>Optimized debug output-related logic</li></ul><h2 id="_3-7-9-2023-11-03" tabindex="-1">3.7.9 [2023/11/03] <a class="header-anchor" href="#_3-7-9-2023-11-03" aria-label="Permalink to &quot;3.7.9 [2023/11/03]&quot;">​</a></h2><ul><li>Solved the problem of the Loading icon lingering during YouTube play and pause</li></ul><h2 id="_3-7-8-2023-06-28" tabindex="-1">3.7.8 [2023/06/28] <a class="header-anchor" href="#_3-7-8-2023-06-28" aria-label="Permalink to &quot;3.7.8 [2023/06/28]&quot;">​</a></h2><ul><li>Attempted to optimize the memory occupancy of the B site</li></ul><h2 id="_3-7-7-2023-06-26" tabindex="-1">3.7.7 [2023/06/26] <a class="header-anchor" href="#_3-7-7-2023-06-26" aria-label="Permalink to &quot;3.7.7 [2023/06/26]&quot;">​</a></h2><ul><li>Fixed the problem of audio and visual asynchrony after frequent switching of high and low speed</li></ul><h2 id="_3-7-6-2023-05-16" tabindex="-1">3.7.6 [2023/05/16] <a class="header-anchor" href="#_3-7-6-2023-05-16" aria-label="Permalink to &quot;3.7.6 [2023/05/16]&quot;">​</a></h2><ul><li>Added a UI configuration interface for global configuration</li><li>Added support for ShadowDOM events</li><li>Fixed the problem of B-site video ratio being interfered after adjustment</li></ul><h2 id="_3-7-5-2023-04-21" tabindex="-1">3.7.5 [2023/04/21] <a class="header-anchor" href="#_3-7-5-2023-04-21" aria-label="Permalink to &quot;3.7.5 [2023/04/21]&quot;">​</a></h2><ul><li>Solved the problem of not being able to chat normally in NewBing</li><li>Resolved the issue of not being able to enter Wenxin Yiyuan normally</li><li>Resolved the issue of script icons displaying abnormally under certain networks</li><li>Fixed logical issues with shortcut keys compatible with win and mac</li></ul><h2 id="_3-7-4-2023-03-31" tabindex="-1">3.7.4 [2023/03/31] <a class="header-anchor" href="#_3-7-4-2023-03-31" aria-label="Permalink to &quot;3.7.4 [2023/03/31]&quot;">​</a></h2><ul><li>Promoted the public interest ChatGPT</li></ul><h2 id="_3-7-3-2023-03-15" tabindex="-1">3.7.3 [2023/03/15] <a class="header-anchor" href="#_3-7-3-2023-03-15" aria-label="Permalink to &quot;3.7.3 [2023/03/15]&quot;">​</a></h2><ul><li>Added menu options to enable/disable scripts</li><li>Changed UA to solve the playback speed problem for non-members of Baidu Drive</li></ul><h2 id="_3-7-2-2023-02-23" tabindex="-1">3.7.2 [2023/02/23] <a class="header-anchor" href="#_3-7-2-2023-02-23" aria-label="Permalink to &quot;3.7.2 [2023/02/23]&quot;">​</a></h2><ul><li>Resolved the playback speed issue for non-members of Baidu Drive</li><li>Enhanced the anti-interference ability of the speed adjustment</li></ul><h2 id="_3-7-1-2022-11-29" tabindex="-1">3.7.1 [2022/11/29] <a class="header-anchor" href="#_3-7-1-2022-11-29" aria-label="Permalink to &quot;3.7.1 [2022/11/29]&quot;">​</a></h2><ul><li>Added the switch menu option for volume gain</li><li>Added the switch menu option for cross-domain control</li><li>Enhanced the internationalization information</li></ul><h2 id="_3-7-0-2022-11-25" tabindex="-1">3.7.0 [2022/11/25] <a class="header-anchor" href="#_3-7-0-2022-11-25" aria-label="Permalink to &quot;3.7.0 [2022/11/25]&quot;">​</a></h2><ul><li>Implemented the ability to customize shortcut keys</li><li>Implemented the ability to customize configurations</li><li>Implemented the ability to customize the task configuration center</li><li>Increased the ability of volume gain to enhance volume loudness</li><li>Added more menu control items and optimized menu interaction</li><li>Removed debug mode to reduce unnecessary information output</li><li>Optimized the issue of shortcut key occupancy and conflict</li><li>Solved the issue of abnormal recovery of playback speed</li><li>Removed some unused APIs and scripts</li></ul><h2 id="_3-6-3-2022-11-18" tabindex="-1">3.6.3 [2022/11/18] <a class="header-anchor" href="#_3-6-3-2022-11-18" aria-label="Permalink to &quot;3.6.3 [2022/11/18]&quot;">​</a></h2><ul><li>Increased the anti-interference ability of the speed adjustment</li><li>Fixed the issue of default progress prohibition not being effective</li><li>Fixed the issue of B-site&#39;s &quot;Next Episode&quot; feature failing under certain addresses</li></ul><h2 id="_3-6-2-2022-11-11" tabindex="-1">3.6.2 [2022/11/11] <a class="header-anchor" href="#_3-6-2-2022-11-11" aria-label="Permalink to &quot;3.6.2 [2022/11/11]&quot;">​</a></h2><ul><li>Optimized menu description</li><li>Fixed the issue of B-site’s HEVC video control failing</li></ul><h2 id="_3-6-1-2022-11-3" tabindex="-1">3.6.1 [2022/11/3] <a class="header-anchor" href="#_3-6-1-2022-11-3" aria-label="Permalink to &quot;3.6.1 [2022/11/3]&quot;">​</a></h2><ul><li>Added an option to switch on/off experimental features</li><li>Added the ability to download video stream content (experimental feature)</li><li>Optimized playback progress record and recovery logic</li><li>Fixed the issue with overlapped Tampermonkey menus</li></ul><h2 id="_3-6-0-2022-10-23" tabindex="-1">3.6.0 [2022/10/23] <a class="header-anchor" href="#_3-6-0-2022-10-23" aria-label="Permalink to &quot;3.6.0 [2022/10/23]&quot;">​</a></h2><ul><li>Refactored the underlying control logic to enhance compatibility</li><li>Added support for speed control of audio playback</li><li>Added support for the AdGuard extension</li><li>Can be used as a separate script introduced into web pages</li><li>Gradually reduced dependence on Tampermonkey&#39;s proprietary API</li><li>Adjusted the logic for recording playback progress</li><li>Optimized and improved the accuracy of playback instance switching</li><li>Fixed the issue of speed control failure in Tencent videos</li><li>Fixed the problem of content prompts lingering on the page</li><li>Solved the issue of control over the play progress not being able to return to 0:00</li><li>Solved the issue of numeric menus appearing in Tampermonkey</li></ul><h2 id="_3-5-4-2022-10-9" tabindex="-1">3.5.4 [2022/10/9] <a class="header-anchor" href="#_3-5-4-2022-10-9" aria-label="Permalink to &quot;3.5.4 [2022/10/9]&quot;">​</a></h2><ul><li>Added compatibility for lower version webkit core</li></ul><h2 id="_3-5-3-2022-9-28" tabindex="-1">3.5.3 [2022/9/28] <a class="header-anchor" href="#_3-5-3-2022-9-28" aria-label="Permalink to &quot;3.5.3 [2022/9/28]&quot;">​</a></h2><ul><li>Optimized the double-click reaction time of the numeric key speed adjustment</li><li>Fixed the issue of frequently appearing tips</li><li>Fixed the compatibility issue with the Duolingo website</li></ul><h2 id="_3-5-2-2022-9-26" tabindex="-1">3.5.2 [2022/9/26] <a class="header-anchor" href="#_3-5-2-2022-9-26" aria-label="Permalink to &quot;3.5.2 [2022/9/26]&quot;">​</a></h2><ul><li>Added the ability to adjust the speed jump-wise</li><li>Solved the issue of Youtube&#39;s speed adjustment not being effective</li><li>Updated script documentation information and related addresses</li><li>Fixed the issue of mute/unmute failure on some websites</li></ul><h2 id="_3-5-1-2022-9-24" tabindex="-1">3.5.1 [2022/9/24] <a class="header-anchor" href="#_3-5-1-2022-9-24" aria-label="Permalink to &quot;3.5.1 [2022/9/24]&quot;">​</a></h2><ul><li>Added the ability to recover video pan, zoom, and rotate</li><li>Optimized compatibility with Xuetang Online</li><li>Optimized debug information output</li></ul><h2 id="_3-5-0-2022-9-21" tabindex="-1">3.5.0 [2022/9/21] <a class="header-anchor" href="#_3-5-0-2022-9-21" aria-label="Permalink to &quot;3.5.0 [2022/9/21]&quot;">​</a></h2><ul><li>Refactored configuration option storage management logic</li><li>Enhanced the fault tolerance ability of play/pause state switching</li><li>Improved success rate of script initialization</li><li>Increased detection rate of video instances</li><li>Optimized shortcut key occupancy situation for cross-TAB control</li><li>Adjusted volume amplitude from 10% to 5%</li><li>Adjusted screen zoom from 10% to 5%</li><li>Removed volume sync logic during initialization of instances</li><li>Removed useless code to streamline script volume</li><li>Fixed playback control support for several sites</li></ul><h2 id="_3-4-8-2022-9-13" tabindex="-1">3.4.8 [2022/9/13] <a class="header-anchor" href="#_3-4-8-2022-9-13" aria-label="Permalink to &quot;3.4.8 [2022/9/13]&quot;">​</a></h2><ul><li>Temporarily retreated to the 3.4.6 code</li></ul><h2 id="_3-4-7-2022-9-06" tabindex="-1">3.4.7 [2022/9/06] <a class="header-anchor" href="#_3-4-7-2022-9-06" aria-label="Permalink to &quot;3.4.7 [2022/9/06]&quot;">​</a></h2><ul><li>Added management logic to record playback volume</li><li>Implemented compatibility between speed adjustment and website&#39;s own speed adjustment</li><li>Added configurable options to the task configuration center</li><li>Added a menu option to turn on/off enhanced configurations</li><li>Added blocking of adjustment playback progress detection and anti-blocking</li><li>Fixed the abnormal synchronization of configuration items in the configuration item state manager</li></ul><h2 id="_3-4-6-2022-9-04" tabindex="-1">3.4.6 [2022/9/04] <a class="header-anchor" href="#_3-4-6-2022-9-04" aria-label="Permalink to &quot;3.4.6 [2022/9/04]&quot;">​</a></h2><ul><li>Added detection of blocking speed adjustment and anti-blocking</li><li>Enhanced the accuracy of video instance switching in multi-instance video websites</li><li>Optimized the user experience of West Melon Video, Zhihu Video, Weibo Video</li></ul><h2 id="_3-4-5-2022-9-02" tabindex="-1">3.4.5 [2022/9/02] <a class="header-anchor" href="#_3-4-5-2022-9-02" aria-label="Permalink to &quot;3.4.5 [2022/9/02]&quot;">​</a></h2><ul><li>Implemented automatic writing of video screenshot results to the clipboard</li><li>Added configurable items to the task configuration center</li><li>Enhanced fault tolerance of the task configuration center</li><li>Functionized shortcut key call</li><li>Optimized support for Netflix</li></ul><h2 id="_3-4-4-2022-8-30" tabindex="-1">3.4.4 [2022/8/30] <a class="header-anchor" href="#_3-4-4-2022-8-30" aria-label="Permalink to &quot;3.4.4 [2022/8/30]&quot;">​</a></h2><ul><li>Added configuration option for global playback speed</li><li>Optimized speed recording of cross-domain limited pages</li><li>Fixed the problem of the auto-play menu option being invalid</li><li>Fixed the problem of failed volume adjustment for Zhihu videos</li></ul><h2 id="_3-4-3-2022-8-29" tabindex="-1">3.4.3 [2022/8/29] <a class="header-anchor" href="#_3-4-3-2022-8-29" aria-label="Permalink to &quot;3.4.3 [2022/8/29]&quot;">​</a></h2><ul><li>Added support for local video playback control</li><li>Added support for B station&#39;s HEVC videos (bwp player)</li><li>Fixed the style disorder problem that may be caused by the prompt DOM</li><li>Optimized the condition judgment when automatically paused when screenshotting</li></ul><h2 id="_3-4-2-2022-8-26" tabindex="-1">3.4.2 [2022/8/26] <a class="header-anchor" href="#_3-4-2-2022-8-26" aria-label="Permalink to &quot;3.4.2 [2022/8/26]&quot;">​</a></h2><ul><li>Adjusted screenshot interaction to achieve full compatibility of video screenshots</li><li>Added video mirror flip function</li><li>Optimized cross-TAB control logic</li><li>Optimized picture-in-picture detection logic</li><li>Fixed the cross-TAB control failure problem caused by the picture-in-picture performance strategy</li></ul><h2 id="_3-4-1-2022-8-22" tabindex="-1">3.4.1 [2022/8/22] <a class="header-anchor" href="#_3-4-1-2022-8-22" aria-label="Permalink to &quot;3.4.1 [2022/8/22]&quot;">​</a></h2><ul><li>Improved the control experience of cross-domain iframe videos</li><li>Fixed the menu function of enabling/disabling auto-play</li></ul><h2 id="_3-4-0-2022-8-21" tabindex="-1">3.4.0 [2022/8/21] <a class="header-anchor" href="#_3-4-0-2022-8-21" aria-label="Permalink to &quot;3.4.0 [2022/8/21]&quot;">​</a></h2><ul><li>Improved the success rate of script initialization</li><li>Added configuration management script logic</li><li>Adjusted and perfected menu registration logic</li><li>Added compatibility for douyin.com</li><li>Fixed the shortcut key failure problem for B station&#39;s &quot;Watch Later&quot; videos</li></ul><h2 id="_3-3-12-2022-8-14" tabindex="-1">3.3.12 [2022/8/14] <a class="header-anchor" href="#_3-3-12-2022-8-14" aria-label="Permalink to &quot;3.3.12 [2022/8/14]&quot;">​</a></h2><ul><li>Fixed the problem of B station space pause play invalid</li><li>Fixed the problem of B station next episode shortcut key invalid</li></ul><h2 id="_3-3-11-2022-8-14" tabindex="-1">3.3.11 [2022/8/14] <a class="header-anchor" href="#_3-3-11-2022-8-14" aria-label="Permalink to &quot;3.3.11 [2022/8/14]&quot;">​</a></h2><ul><li>Fixed the problem of invalid webpage fullscreen and fullscreen shortcuts for B station</li></ul><h2 id="_3-3-10-2022-5-10" tabindex="-1">3.3.10 [2022/5/10] <a class="header-anchor" href="#_3-3-10-2022-5-10" aria-label="Permalink to &quot;3.3.10 [2022/5/10]&quot;">​</a></h2><ul><li>Optimized the function and compatibility of some underlying libraries</li></ul><h2 id="_3-3-9-2021-6-6" tabindex="-1">3.3.9 [2021/6/6] <a class="header-anchor" href="#_3-3-9-2021-6-6" aria-label="Permalink to &quot;3.3.9 [2021/6/6]&quot;">​</a></h2><ul><li>Fixed the problem of automatic playback of multiple videos at the same time</li><li>Added a button to disable initialization playback logic</li></ul><h2 id="_3-3-8-2021-6-6" tabindex="-1">3.3.8 [2021/6/6] <a class="header-anchor" href="#_3-3-8-2021-6-6" aria-label="Permalink to &quot;3.3.8 [2021/6/6]&quot;">​</a></h2><ul><li>Optimized compatibility with other plugins</li><li>Solved the problem of script failure after initial abnormality</li></ul><h2 id="_3-3-7-2021-5-30" tabindex="-1">3.3.7 [2021/5/30] <a class="header-anchor" href="#_3-3-7-2021-5-30" aria-label="Permalink to &quot;3.3.7 [2021/5/30]&quot;">​</a></h2><ul><li>Added automatic playback of B station videos</li><li>Optimized the webpage full-screen function of websites such as Baidu Pan and West Melon Video</li><li>Fixed some script logic errors</li></ul><h2 id="_3-3-6-2021-5-27" tabindex="-1">3.3.6 [2021/5/27] <a class="header-anchor" href="#_3-3-6-2021-5-27" aria-label="Permalink to &quot;3.3.6 [2021/5/27]&quot;">​</a></h2><ul><li>Fixed the problem of no speed adjustment prompt after switching videos on B station</li><li>Fixed loading exception problem of icon resources in domestic environments</li><li>Fixed the problem of ineffective video playback speed for non-VIP members of Baidu Netdisk</li><li>Solved the problem of speed adjustment loop before playing videos by non-VIP users of Baidu</li></ul><h2 id="_3-3-5-2021-5-26" tabindex="-1">3.3.5 [2021/5/26] <a class="header-anchor" href="#_3-3-5-2021-5-26" aria-label="Permalink to &quot;3.3.5 [2021/5/26]&quot;">​</a></h2><ul><li>Implemented high-speed playback of ads on mainstream video websites</li><li>Refactored some core script library logic</li><li>Optimized script performance and enhanced script compatibility</li></ul><h2 id="_3-3-4-2021-5-25" tabindex="-1">3.3.4 [2021/5/25] <a class="header-anchor" href="#_3-3-4-2021-5-25" aria-label="Permalink to &quot;3.3.4 [2021/5/25]&quot;">​</a></h2><ul><li>Reduced the impact of hookJs performance on other websites (temporary solution)</li></ul><h2 id="_3-3-3-2021-5-20" tabindex="-1">3.3.3 [2021/5/20] <a class="header-anchor" href="#_3-3-3-2021-5-20" aria-label="Permalink to &quot;3.3.3 [2021/5/20]&quot;">​</a></h2><ul><li>Fixed the issue of ineffective video playback speed for non-VIP members of Baidu Web Disk</li></ul><h2 id="_3-3-2-2021-5-19" tabindex="-1">3.3.2 [2021/5/19] <a class="header-anchor" href="#_3-3-2-2021-5-19" aria-label="Permalink to &quot;3.3.2 [2021/5/19]&quot;">​</a></h2><ul><li>Fixed support for Baidu NetDisk and other websites</li></ul><h2 id="_3-3-1-2020-9-3" tabindex="-1">3.3.1 [2020/9/3] <a class="header-anchor" href="#_3-3-1-2020-9-3" aria-label="Permalink to &quot;3.3.1 [2020/9/3]&quot;">​</a></h2><ul><li>Solved the problem of black screens on B site</li></ul><h2 id="_3-3-0-2020-4-24" tabindex="-1">3.3.0 [2020/4/24] <a class="header-anchor" href="#_3-3-0-2020-4-24" aria-label="Permalink to &quot;3.3.0 [2020/4/24]&quot;">​</a></h2><ul><li>The prompt interface supports internationalization</li><li>Optimized the operation experience of B site and YouTube</li><li>Optimized some other feedback issues</li></ul><h2 id="_3-2-8-2020-4-12" tabindex="-1">3.2.8 [2020/4/12] <a class="header-anchor" href="#_3-2-8-2020-4-12" aria-label="Permalink to &quot;3.2.8 [2020/4/12]&quot;">​</a></h2><ul><li>Added debugging auxiliary logic to implement hot update debugging</li><li>Introduced UI-related dependencies, ready for UI interface development</li><li>Solved compatibility issues of some websites</li></ul><h2 id="_3-2-7-2020-4-11" tabindex="-1">3.2.7 [2020/4/11] <a class="header-anchor" href="#_3-2-7-2020-4-11" aria-label="Permalink to &quot;3.2.7 [2020/4/11]&quot;">​</a></h2><ul><li>Fixed website page exceptions caused by script errors</li></ul><h2 id="_3-2-6-2020-4-11" tabindex="-1">3.2.6 [2020/4/11] <a class="header-anchor" href="#_3-2-6-2020-4-11" aria-label="Permalink to &quot;3.2.6 [2020/4/11]&quot;">​</a></h2><ul><li>Fixed error reporting problems in multiple websites caused by cross-domain screenshots</li></ul><h2 id="_3-2-5-2020-4-10" tabindex="-1">3.2.5 [2020/4/10] <a class="header-anchor" href="#_3-2-5-2020-4-10" aria-label="Permalink to &quot;3.2.5 [2020/4/10]&quot;">​</a></h2><ul><li>Corrected some website compatibility issues</li></ul><h2 id="_3-2-4-2020-4-9" tabindex="-1">3.2.4 [2020/4/9] <a class="header-anchor" href="#_3-2-4-2020-4-9" aria-label="Permalink to &quot;3.2.4 [2020/4/9]&quot;">​</a></h2><ul><li>Supported cross-domain screenshots</li><li>Supported suspension of specific events (to enhance anti-interference ability)</li><li>Optimized volume adjustment step length logic</li></ul><h2 id="_3-2-3-2020-4-5" tabindex="-1">3.2.3 [2020/4/5] <a class="header-anchor" href="#_3-2-3-2020-4-5" aria-label="Permalink to &quot;3.2.3 [2020/4/5]&quot;">​</a></h2><ul><li>Supported multiple languages</li></ul><h2 id="_3-2-2-2020-4-4" tabindex="-1">3.2.2 [2020/4/4] <a class="header-anchor" href="#_3-2-2-2020-4-4" aria-label="Permalink to &quot;3.2.2 [2020/4/4]&quot;">​</a></h2><ul><li>Added compatibility with Facebook&#39;s full-screen shortcut key</li><li>Added fast forward, fast rewind, fast volume up, fast volume down (ctrl+up and down arrows)</li><li>Fixed rotation function BUG</li></ul><h2 id="_3-2-1-2019-12-21" tabindex="-1">3.2.1 [2019/12/21] <a class="header-anchor" href="#_3-2-1-2019-12-21" aria-label="Permalink to &quot;3.2.1 [2019/12/21]&quot;">​</a></h2><ul><li>Automatically restore settings adjusted to be controlled by domain name</li><li>Added compatibility for Station A and cancelled automatic play for Station B</li><li>Optimized some other function details</li></ul><h2 id="_3-2-0-2019-11-22" tabindex="-1">3.2.0 [2019/11/22] <a class="header-anchor" href="#_3-2-0-2019-11-22" aria-label="Permalink to &quot;3.2.0 [2019/11/22]&quot;">​</a></h2><ul><li>Added cross-Tab operation Picture-in-Picture video function</li></ul><h2 id="_3-1-2-2019-11-20" tabindex="-1">3.1.2 [2019/11/20] <a class="header-anchor" href="#_3-1-2-2019-11-20" aria-label="Permalink to &quot;3.1.2 [2019/11/20]&quot;">​</a></h2><ul><li>Fixed the BUG causing black screen due to non-compatibility of filter in Firefox</li><li>Added one-click play next video function to some websites</li><li>Enhanced compatibility of some websites</li></ul><h2 id="_3-1-1-2019-11-5" tabindex="-1">3.1.1 [2019/11/5] <a class="header-anchor" href="#_3-1-1-2019-11-5" aria-label="Permalink to &quot;3.1.1 [2019/11/5]&quot;">​</a></h2><ul><li>Added compatibility for certain websites</li><li>Optimized the logic of obtaining prompt parent node</li></ul><h2 id="_3-1-0-2019-10-24" tabindex="-1">3.1.0 [2019/10/24] <a class="header-anchor" href="#_3-1-0-2019-10-24" aria-label="Permalink to &quot;3.1.0 [2019/10/24]&quot;">​</a></h2><ul><li>Added the control option to automatically restore playback progress</li><li>Fixed bugs where tips could not be displayed correctly on some websites</li></ul><h2 id="_3-0-5-2019-10-14" tabindex="-1">3.0.5 [2019/10/14] <a class="header-anchor" href="#_3-0-5-2019-10-14" aria-label="Permalink to &quot;3.0.5 [2019/10/14]&quot;">​</a></h2><ul><li>Added compatibility for Mac shortcut keys</li><li>Optimized some code logic</li></ul><h2 id="_3-0-4-2019-10-11" tabindex="-1">3.0.4 [2019/10/11] <a class="header-anchor" href="#_3-0-4-2019-10-11" aria-label="Permalink to &quot;3.0.4 [2019/10/11]&quot;">​</a></h2><ul><li>Enhanced compatibility of prompt style under different websites</li><li>Optimized the method of obtaining video wrapper node</li></ul><h2 id="_3-0-3-2019-10-9" tabindex="-1">3.0.3 [2019/10/9] <a class="header-anchor" href="#_3-0-3-2019-10-9" aria-label="Permalink to &quot;3.0.3 [2019/10/9]&quot;">​</a></h2><ul><li>Solved the style chaos BUG caused by tips</li><li>Optimized the method of obtaining video wrapper node</li><li>Added MouseObserver module</li></ul><h2 id="_3-0-2-2019-9-27" tabindex="-1">3.0.2 [2019/9/27] <a class="header-anchor" href="#_3-0-2-2019-9-27" aria-label="Permalink to &quot;3.0.2 [2019/9/27]&quot;">​</a></h2><ul><li>Fixed the problem of Task Configuration Center failure</li><li>Optimized operation prompt style to reduce interference</li><li>Optimized screenshot file size</li><li>Added compatibility for some websites</li></ul><h2 id="_3-0-1-2019-9-25" tabindex="-1">3.0.1 [2019/9/25] <a class="header-anchor" href="#_3-0-1-2019-9-25" aria-label="Permalink to &quot;3.0.1 [2019/9/25]&quot;">​</a></h2><ul><li>Fixed the BUG of screenshot download failure due to overly long screenshot file link</li><li>Added an ico icon</li></ul><h2 id="_3-0-0-2019-9-22" tabindex="-1">3.0.0 [2019/9/22] <a class="header-anchor" href="#_3-0-0-2019-9-22" aria-label="Permalink to &quot;3.0.0 [2019/9/22]&quot;">​</a></h2><ul><li>Supported video screenshot</li><li>Supported Shortcut key Cross-domain Control</li><li>Added more useful modules for future development</li></ul><h2 id="_2-6-1-2019-9-19" tabindex="-1">2.6.1 [2019/9/19] <a class="header-anchor" href="#_2-6-1-2019-9-19" aria-label="Permalink to &quot;2.6.1 [2019/9/19]&quot;">​</a></h2><ul><li>Removed statistical function</li><li>Compatible with cross-domain iframe play</li></ul><h2 id="_2-6-0-2019-9-18" tabindex="-1">2.6.0 [2019/9/18] <a class="header-anchor" href="#_2-6-0-2019-9-18" aria-label="Permalink to &quot;2.6.0 [2019/9/18]&quot;">​</a></h2><ul><li>Added restore play speed function</li><li>Added Esc to exit webpage full screen</li><li>Code logic modularized</li></ul><h2 id="_2-5-1-2019-9-11" tabindex="-1">2.5.1 [2019/9/11] <a class="header-anchor" href="#_2-5-1-2019-9-11" aria-label="Permalink to &quot;2.5.1 [2019/9/11]&quot;">​</a></h2><ul><li>Fixed excessive occupation of shortcut keys BUG</li></ul><h2 id="_2-5-0-2019-9-11" tabindex="-1">2.5.0 [2019/9/11] <a class="header-anchor" href="#_2-5-0-2019-9-11" aria-label="Permalink to &quot;2.5.0 [2019/9/11]&quot;">​</a></h2><ul><li>Added screen moving function</li><li>Task Configuration Center adds custom initialization method</li><li>Shielded part of the website watermark</li><li>Blocked iQiyi pause ads</li><li>Compatible with Baidu Cloud Disk full screen shortcut keys</li><li>Fixed several BUGs</li></ul><h2 id="_2-4-1-2019-8-30" tabindex="-1">2.4.1 [2019/8/30] <a class="header-anchor" href="#_2-4-1-2019-8-30" aria-label="Permalink to &quot;2.4.1 [2019/8/30]&quot;">​</a></h2><ul><li>Compatible with Tencent video speed play</li><li>Added Picture-in-Picture function</li><li>Added shortcut key customization function</li></ul><h2 id="_2-3-3-2019-8-30" tabindex="-1">2.3.3 [2019/8/30] <a class="header-anchor" href="#_2-3-3-2019-8-30" aria-label="Permalink to &quot;2.3.3 [2019/8/30]&quot;">​</a></h2><ul><li>Compatible with Tencent video shortcut key operation</li><li>Added Picture-in-Picture function</li><li>Added shortcut key customization function</li></ul><h2 id="_2-3-2-2019-6-15" tabindex="-1">2.3.2 [2019/6/15] <a class="header-anchor" href="#_2-3-2-2019-6-15" aria-label="Permalink to &quot;2.3.2 [2019/6/15]&quot;">​</a></h2><ul><li>Compatible with NetEase Open Class webpage</li><li>Fixed non-linear brightness, contrast, saturation adjustment BUG</li><li>Optimized other details such as fast forward and fast rewind</li></ul><h2 id="_2-3-0-2019-5-5" tabindex="-1">2.3.0 [2019/5/5] <a class="header-anchor" href="#_2-3-0-2019-5-5" aria-label="Permalink to &quot;2.3.0 [2019/5/5]&quot;">​</a></h2><ul><li>Added default full-screen logic</li><li>Added default webpage full-screen logic</li><li>Fixed other related BUGs</li></ul><h2 id="_2-2-0-2019-4-21" tabindex="-1">2.2.0 [2019/4/21] <a class="header-anchor" href="#_2-2-0-2019-4-21" aria-label="Permalink to &quot;2.2.0 [2019/4/21]&quot;">​</a></h2><ul><li>Refactored Task Configuration Center code logic</li><li>Corrected the compatibility logic of Bilibili under pause</li><li>Added compatibility with Bilibili Live</li><li>Fixed other related BUGs</li></ul><h2 id="_2-1-0-2019-4-18" tabindex="-1">2.1.0 [2019/4/18] <a class="header-anchor" href="#_2-1-0-2019-4-18" aria-label="Permalink to &quot;2.1.0 [2019/4/18]&quot;">​</a></h2><ul><li>Implemented Task Configuration Center (TCC)</li><li>Added some websites&#39; full screen, webpage full screen play shortcut keys through the Task Configuration Center</li><li>Corrected the problem that the playback speed cannot be synchronized under multiple instances</li><li>Optimized prompt style</li><li>Fixed other related BUGs</li></ul><h2 id="_2-0-0-2019-4-15" tabindex="-1">2.0.0 [2019/4/15] <a class="header-anchor" href="#_2-0-0-2019-4-15" aria-label="Permalink to &quot;2.0.0 [2019/4/15]&quot;">​</a></h2><ul><li>Unlocked shadowdom&#39;s video component</li><li>Supports multi-instance environment</li><li>Greatly optimized performance, using faster listening methods</li><li>Code restructure and refinement</li><li>Fixed other related BUGs</li></ul><h2 id="_1-3-0-2019-4-13" tabindex="-1">1.3.0 [2019/4/13] <a class="header-anchor" href="#_1-3-0-2019-4-13" aria-label="Permalink to &quot;1.3.0 [2019/4/13]&quot;">​</a></h2><ul><li>Added resume playback progress function</li><li>Added record playback speed function</li><li>Added disable plugin shortcut function (Ctrl+space)</li><li>Shortcut key becomes globally available, improved compatibility</li><li>Fixed other related BUGs</li></ul><h2 id="_1-2-0-2019-4-12" tabindex="-1">1.2.0 [2019/4/12] <a class="header-anchor" href="#_1-2-0-2019-4-12" aria-label="Permalink to &quot;1.2.0 [2019/4/12]&quot;">​</a></h2><ul><li>Added function to zoom video screen size</li><li>Added support for netflix website</li><li>Fully adjusted code structure</li><li>Corrected some compatibility issues and related BUGs</li><li>Script code engineering, code complies with js standard specification</li><li>Completed documentation</li></ul><h2 id="_1-1-2-2019-4-11" tabindex="-1">1.1.2 [2019/4/11] <a class="header-anchor" href="#_1-1-2-2019-4-11" aria-label="Permalink to &quot;1.1.2 [2019/4/11]&quot;">​</a></h2><ul><li>Inherited code, tidied code</li><li>Optimized adjustment of some codes</li></ul>',179),r=[o];function n(d,s,u,h,c,m){return a(),i("div",null,r)}const b=e(t,[["render",n]]);export{f as __pageData,b as default};
