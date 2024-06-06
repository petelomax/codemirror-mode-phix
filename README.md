# codemirror-mode-phix
> A CodeMirror mode for the Phix language

## Installation

```console
npm install codemirror codemirror-mode-phix --save
```

## Usage

1. Include `codemirror-mode-phix` into your project.

    ```html
    <!-- You can simply add phix.js as a script tag: -->
    <script src="js/codemirror.js"></script>
    <script src="js/codemirror-mode-phix/dist/phix.js"></script>
    ```

    or

    ```js
    // If you're using frontend build tools like Webpack and Babel,
    // you can simply import the module and register the mode:
    import CodeMirror from 'codemirror'
    import registerPhixMode from 'codemirror-mode-phix'
    ```

1. Set 'phix' as the mode when creating the CodeMirror editor.

    ```js
    CodeMirror.fromTextArea(document.getElementById('code'), { mode: 'phix' })
    ```

## License

MIT - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com) and hastily patched from elixir to phix by Pete Lomax

&nbsp;

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg">
</a>

[licenseUrl]: https://github.com/petelomax/codemirror-mode-phix/blob/master/LICENSE
