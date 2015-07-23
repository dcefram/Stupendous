# Stupendous

A [ghost](https://ghost.org) and [stylus](http://learnboost.github.io/stylus/)
experiment. Initially forked from [Vapor](https://github.com/sethlilly/Vapor),
did some customization by adding some salt and pepper and then switched away
from less.

Most icons are from casper theme, along with some that I got from
[icon-finder](https://www.iconfinder.com)(that'll be the twitter icon).

Check out [my blog](http://blog.danielcefram.com) if ever you are curious as to
how this thing look like.

## Contributing and Forking

I honestly think that contributing to Vapor is better for most, since it's much
cleaner and easier to customize. But yeah, you could contribute here too, or at
least report if there are some glitches here and there as long the browser in
question is relevant.

## Changelog
- 1.3.1 - 2015-07-23
  - Fix read-next display on Safari [#1](https://github.com/dcefram/stupendous/issues/1)
  - Fix grunt's stylus task to point to correct folder path
  - Change versioning from m.m to m.m.p (major.minor.patch)
  - Change spacing from 4 spaces to 2 spaces for both JS and Stylus files
- 1.3 - 2015-04-23
  - Added prism for code syntax highlight
  - Updated previous post style
- 1.2 - 2015-04-20
- Added support for previous and next post links
- Added jeet to stylus folder (due to compilation failure on different environments)
- 1.1 - 2015-03-10
  - Added tag.hbs
  - Use asset helper for favicons
  - Add google-code-prettify for prettifying codes
- 1.0 - 2015-03-02

## What's next?

I got plans to update my theme based on my own needs, when I feel like updating it.
You see, I'm quite into Go Language nowadays, and my day job is eating up a lot of
time too (delving to the insides of webcomponents). But hopefully, I get the
implemented on my blog to make it look awesome.

- Implement Blog Cover, possibly similar to how casper does it (covers the whole page if the blog cover exists)
- Implement featured posts (I got no usecase for it right now, but it could be a good addition)
- Implement custom navigation. I think I can make use of it's class (nav-*) to map the logos. Need to
  consider the drawer thingy when on mobile view though.

## License
Copyright (c) 2014-2015, Daniel Cefram Ramirez - Released under The MIT License.

Forked from Vapor, so basically...

Copyright (c) 2013-2014 Seth Lilly - Released under The MIT License.

## Credits

- [Vapor](https://github.com/sethlilly/Vapor) by [Seth Lilly](http://sethlilly.com)
- Twitter Icon by [icon-finder](https://www.iconfinder.com)
- Aaaaaaaaaand, I guess that's it. Oh yeah, ghost.io for their wonderful blogging platform <3
