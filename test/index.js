
import element from 'virtual-element';
import assert from 'assert';
import { tree, render } from 'deku';
import CopyButton from '../src';

const fixture = document.createElement('div');

describe('<CopyButton />', function() {
  before(function() {
    document.body.appendChild(fixture);
  });

  beforeEach(function() {
    fixture.innerHTML = '';
  });

  after(function() {
    document.body.appendChild(fixture);
  });

  it('should render', function() {
    const el = mount(<CopyButton />);
    const copyButton = el.querySelector('.CopyButton');
    assert(copyButton);
  });
});

function mount(n) {
  const app = tree(n);
  render(app, fixture);
  return fixture;
}
