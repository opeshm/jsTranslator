# jsTranslator

## Description

A small utility that helps you to locale your html.

## Usage

HTML:
```
<tag data-ops-translate="text">Text</tag>
```

Javascript:
```
var translator = new jsTranslator({
    "locale_path": "json/",
    "locale": "es-ES",
    "enable_animation": true
  });
```

json/es-ES.json:
```
{
  "text": "Text to translate"
}
```
