# LightBox.js
## Call the plugin:
<pre>
    <code>$(var).LightBox();</code>
</pre>
<p>Browsers : IE7+, Firefox 5+, Chrome 20+, Safari 3+, Opera 10+ </p>
### Options:
#### Opening one time by session options:
<p>The use of the variable "openFirst" active display popup unique throughout the duration of the session configured by
    the cookie created with the option "openFirst" enabled.</p>
<p>jquery-cookie.js is required to create the cookie. Integrated package.
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
    <code>globalClass: varchar
        Default: lightbox</code>
</pre>
<pre>
    <code>relAttr: varchar
        Default: lightbox</code>
</pre>
### Realignment when resizing the window:
The realignment is integrated in the plugin.