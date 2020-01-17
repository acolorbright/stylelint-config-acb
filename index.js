module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-property-sort-order-acb",
  ],
  rules: {
    "at-rule-no-unknown": [true, { "ignoreAtRules": ["define-mixin", "mixin"]}],
    "at-rule-no-vendor-prefix": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "max-nesting-depth": 3,
    "media-feature-name-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "declaration-property-value-whitelist": {
      "/color$/": [
        "/^\\$|initial|inherit|transparent|currentColor|var/"
      ],
      "fill": [
        "/^\\$|initial|inherit|transparent|currentColor|var/"
      ],
      "stroke": [
        "/^\\$|initial|inherit|transparent|currentColor|var/"
      ]
    }
  }
}
