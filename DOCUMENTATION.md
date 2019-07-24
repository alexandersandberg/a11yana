# Documentation (temporary)
This is temporary file containing documentation of supported features. This will later be added to the project website's documentation.

## Elements and features
* Optimized for any zoom level with any browser font size.

### Skip link
```html
<body id="body">
	<a href="#main">Skip to main content</a>

	...
```

### Subtitles
```html
<h*>
	This is the main title
	<span>This is the subtitle</span>
</h*>
```

## Best practice/suggested semantics for accessibility

### Blockquotes
```html
<blockquote>
	<p>Some quote goes here.</p>
</blockquote>
```

```html
<figure>
	<blockquote>
		<p>Some quote goes here.</p>
	</blockquote>
	<figcaption>
		<cite>The author</cite> and a reference to the work.
	</figcaption>
</figure>
```