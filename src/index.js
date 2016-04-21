
/**
 * Module dependencies.
 */

import element from 'virtual-element';
import Clipboard from 'clipboard';
import uid from 'uid';

/**
 * Exports.
 */

export default {
  initialState,
  afterMount,
  render
};

/**
 * Initial state.
 */

function initialState() {
  return {
    copied: false
  };
}

/**
 * After mount.
 */

function afterMount({ props }, el, setState) {
  const id = el.id = el.id || `x${uid(30)}`;
  const clipboard = new Clipboard(`#${id} .CopyButton-button`);
  clipboard.on('success', function() {
    setState({ copied: true });
    setTimeout(function() {
      setState({ copied: false });
    }, props.duration || 2000);
  });
}

/**
 * Render.
 */

function render({ props, state }) {
  const { text, label } = props;
  const { copied } = state;
  return (
    <div class="CopyButton">
      <div class="CopyButton-left">
        <span class="CopyButton-label">{label}</span>
        <input class="CopyButton-text" value={text} readonly/>
      </div>
      <div class="CopyButton-right">
        <button class="CopyButton-button" data-clipboard-text={text}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
