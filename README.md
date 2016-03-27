# Stupendous

A [ghost](https://ghost.org) and [stylus](http://learnboost.github.io/stylus/)
experiment. Initially forked from [Vapor](https://github.com/sethlilly/Vapor),
did some customization by adding some salt and pepper and then switched away
from less.

Most icons are from the old casper theme and from [icon-finder](https://www.iconfinder.com)
(Only icons with license that permits me to use it for free)

Check out [my blog](http://dcefram.com) if ever you are curious as to
how this thing look like.

This theme only supports Blink based browsers (Chrome, Opera), Safari, Firefox, and IE10+ (including Edge). IE9 might be supported.

I don't plan to support older IE because those browsers will stay if websites still support it, even though those browsers are not supported anymore

## Contributing and Forking

Just fork. Send pull requests. And/Or submit issues.

## FAQ

**Q. I added additional links to my navigation, but it does not show up on my blog. How to fix that?**

This theme needs icons to display your navigation. It uses the page name and appends a `nav-` as the class of the navigation link. There are 8 icons included on this theme out of the box. These are links for:

- home
- about
- twitter
- facebook
- vk
- github
- bitbucket
- instagram

If you need additional icons, you can just place the icons to the `assets/images/` folder. Make sure it has a dimension of 64x64. Then you'll need to edit the css file or stylus file to add the style.

*The stylus way*

Make sure that you execute `npm install` first on the root folder of stupendous. You can also install gulp globally to make things easier (execute `npm install -g gulp`)

- Edit `src/stylus/components/navigator.styl`
- Add your additional navigation after `li.nav-instagram a`'s block (ie. after [line 45](https://github.com/dcefram/stupendous/blob/master/src/stylus/components/navigator.styl#L45))
- Execute `gulp` in the stupendous folder. That should transpile the stylus files and place the updated main.css file in `assets/css` folder.

*The css way*

Just add your css after [line 190](https://github.com/dcefram/stupendous/blob/master/assets/css/main.css#L190) in the `assets/css/main.css` file. You can just copy how the `.nav-instagram` style was code :)


## Changelog

See [Releases](https://github.com/dcefram/stupendous/releases)

## What's next?

I currently have a fulltime work, along with some other hobbies or other
'ventures'. Don't worry though, I'll get back to this project from time to time.

- Implement Blog Cover, possibly similar to how casper does it (covers the whole page if the blog cover exists)
- Implement featured posts (I got no usecase for it right now, but it could be a good addition)

## License
Copyright (c) 2014-2016, Daniel Cefram Ramirez - Released under The MIT License.

Forked from Vapor, so basically...

Copyright (c) 2013-2014 Seth Lilly - Released under The MIT License.

## Credits

- [Vapor](https://github.com/sethlilly/Vapor) by [Seth Lilly](http://sethlilly.com)
- Twitter Icon by [icon-finder](https://www.iconfinder.com)
- Aaaaaaaaaand, I guess that's it. Oh yeah, ghost.io for their wonderful blogging platform <3
