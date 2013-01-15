# Lightbox.js
## Call the plugin:
<pre>
    <code>$(var).lightbox();</code>
</pre>
<ul>
    <li>Light</li>
    <li>Responsive</li>
    <li>Display with cookies</li>
</ul>
<p>Browsers : IE7+, Firefox 5+, Chrome 20+, Safari 3+, Opera 10+ </p>
### jQuery 1.9 vs 2.0:
<p>Lightbox.js is compatible with version 2.0 of jQuery (beta 1 for now). This version no longer supports version of
    Internet Explorer 7 and 8.</p>
<p>If you want to use version 2.0 of jQuery using the following html code:</p>
<pre>
    <code>
        <!--[if lt IE 9]>
        <script src="jquery-1.9.0.js"></script>
        <![endif]-->
        <!--[if gte IE 9]><!-->
        <script src="jquery-2.0.0.js"></script>
        <!--[endif]-->
    </code>
</pre>
### Options:
#### Opening one time by session options (cookies):
<p>The use of the variable "openFirst" active display popup unique throughout the duration of the session configured by
    the cookie created with the option "openFirst" enabled.</p>
<p>The plugin "jquery-cookie.js" is required to create the cookie. Integrated package.
    (https://github.com/carhartl/jquery-cookie)</p>
<pre>
    <code>openFirst: boolean
        Default: false</code>
</pre>
<pre>
    <code>cookieName: varchar
        Default: lightbox</code>
</pre>
<pre>
    <code>cookieTime: numeric (days)
        Default: 7</code>
</pre>
#### Opening options:
<pre>
    <code>openSpeed: numeric
        Default: 500</code>
</pre>
<pre>
    <code>openEffect: effect
        Default: fade</code>
</pre>
<pre>
    <code>openEasing: effect
        Default: linear</code>
</pre>
#### Closing options:
<pre>
    <code>closeSpeed: numeric
        Default: 500</code>
</pre>
<pre>
    <code>closeEffect: effect
        Default: fade</code>
</pre>
<pre>
    <code>closeEasing: effect
        Default: linear</code>
</pre>
#### Others options:
<pre>
    <code>aroundEffect: boolean
        Default: true</code>
</pre>
<pre>
    <code>aroundClose: boolean
        Default: false</code>
</pre>
<pre>
    <code>globalClass: varchar
        Default: lightbox</code>
</pre>
<pre>
    <code>relAttr: varchar
        Default: lightbox</code>
</pre>
### Realignment when resizing the window:
<p>The realignment is integrated in the plugin.</p>