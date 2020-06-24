/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

/* TargetX Custom Plugins */
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Mention from '@targetx/ckeditor5-mention/src/mention';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	// Custom Plugins
	Alignment,
	Font,
	IndentBlock,
	Highlight,
	Mention,
	Strikethrough,
	Underline
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	fontSize: {
		options: [
			'8pt',
			'9pt',
			'10pt',
			'11pt',
			'12pt',
			'14pt',
			'16pt',
			'18pt',
			'24pt',
			'30pt',
			'36pt',
			'48pt'
		]
	},
	toolbar: {
		items: [
			'alignment',
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'fontBackgroundColor',
			'fontColor',
			'fontFamily',
			'fontSize',
			'|',
			'outdent',
			'indent',
			'insertTable',
			'highlight',
			'numberedList',
			'bulletedList',
			'blockQuote',
			'|',
			'undo',
			'redo'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
