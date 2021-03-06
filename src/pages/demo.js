import React from "react"


class DemoPage extends React.Component {

	render() {
		return (
			<div>
				<h1>Header 1</h1>
				<h2>Header 2</h2>
				<h3>Header 3</h3>
				<h4>Header 4</h4>
				<h5>Header 5</h5>
				<h6>Header 6</h6>

				<p>Lorem ipsum <strong>dolor sit amet, consectetur <em>adipiscing</em></strong> elit. Aenean egestas eu justo quis feugiat. Nam placerat convallis condimentum. Integer ex mi, bibendum eget auctor a, blandit vitae ipsum. Fusce fringilla sapien eget ligula rutrum accumsan. Phasellus sed hendrerit sapien. Mauris ut nulla vitae sem egestas pellentesque. Fusce commodo quam at nibh lobortis fermentum. Duis tristique arcu quis sem sollicitudin, non aliquet mi gravida. Morbi et vulputate sem. Integer sed cursus neque.</p>
				<hr />
				<p>Duis finibus <em>lectus vel ipsum vehicula, a placerat justo euismod</em>. Lorem <small>ipsum dolor sit</small> amet, <sub>consectetur</sub> adipiscing <sup>elit</sup>. Sed eu risus ullamcorper, tempor odio ac, condimentum nibh. Nulla pellentesque enim non lectus efficitur, vel hendrerit eros aliquet. Vivamus nisi elit, varius non nisi vel, dignissim mollis nisi. Donec in tellus tempus, efficitur felis ac, commodo turpis. Donec quis diam iaculis felis faucibus mattis. Sed finibus ligula risus. Mauris et turpis et risus blandit dignissim. Etiam sed augue ante. Donec in feugiat orci. Etiam leo urna, tempus commodo placerat vitae, sodales at tortor. In sit amet pharetra dolor, vel euismod risus.</p> 

				<p>
					<a href="">Here's a link</a>
				</p>

				<blockquote>
					"Wisdom is the offsring of Suffering and Time"
					<cite>&ndash; Izaro</cite>
				</blockquote>

				<h2>Unordered List</h2>
				<ul>
					<li>
						One
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
							<li>Four</li>
						</ul>
					</li>
					<li>Two</li>
					<li>Three</li>
					<li>Four</li>
					<li>Five</li>
					<li>Six</li>
				</ul>

				<h2>Ordered List</h2>
				<ol>
					<li>
						One
						<ol>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
							<li>Four</li>
						</ol>
					</li>
					<li>Two</li>
					<li>Three</li>
					<li>Four</li>
					<li>Five</li>
					<li>Six</li>
				</ol>

				<h2>Data List</h2>
				<dl>
					<dt>Data Point 1</dt>
					<dd>Data Description 1</dd>
					<dt>Data Point 2</dt>
					<dd>Data Description 2</dd>
					<dt>Data Point 3</dt>
					<dd>Data Description 3</dd>
					<dt>Data Point 4</dt>
					<dd>Data Description 4</dd>
				</dl>

				<blockquote></blockquote>


				<h2 id="headings-and-paragraphs">Headings and paragraphs</h2>

				<p>All heading elements—e.g., <code class="highlighter-rouge">&lt;h1&gt;</code>—and <code class="highlighter-rouge">&lt;p&gt;</code> are reset to have their <code class="highlighter-rouge">margin-top</code> removed. Headings have <code class="highlighter-rouge">margin-bottom: .5rem</code> added and paragraphs <code class="highlighter-rouge">margin-bottom: 1rem</code> for easy spacing.</p>

				<table>
					<thead>
						<tr>
							<th>Heading</th>
							<th>Example</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<p><code class="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>

							</td>
							<td><span class="h1">h1. Bootstrap heading</span></td>
						</tr>
						<tr>
							<td>
								<p><code class="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p>

							</td>
							<td><span class="h2">h2. Bootstrap heading</span></td>
						</tr>
						<tr>
							<td>
								<p><code class="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>

							</td>
							<td><span class="h3">h3. Bootstrap heading</span></td>
						</tr>
						<tr>
							<td>
								<p><code class="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p>

							</td>
							<td><span class="h4">h4. Bootstrap heading</span></td>
						</tr>
						<tr>
							<td>
								<p><code class="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p>

							</td>
							<td><span class="h5">h5. Bootstrap heading</span></td>
						</tr>
						<tr>
							<td>
								<p><code class="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p>

							</td>
							<td><span class="h6">h6. Bootstrap heading</span></td>
						</tr>
					</tbody>
				</table>

				<h2 id="lists">Lists</h2>

				<p>All lists—<code class="highlighter-rouge">&lt;ul&gt;</code>, <code class="highlighter-rouge">&lt;ol&gt;</code>, and <code class="highlighter-rouge">&lt;dl&gt;</code>—have their <code class="highlighter-rouge">margin-top</code> removed and a <code class="highlighter-rouge">margin-bottom: 1rem</code>. Nested lists have no <code class="highlighter-rouge">margin-bottom</code>.</p>

				<div class="bd-example">

					<ul>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Consectetur adipiscing elit</li>
						<li>Integer molestie lorem at massa</li>
						<li>Facilisis in pretium nisl aliquet</li>
						<li>Nulla volutpat aliquam velit
    <ul>
								<li>Phasellus iaculis neque</li>
								<li>Purus sodales ultricies</li>
								<li>Vestibulum laoreet porttitor sem</li>
								<li>Ac tristique libero volutpat at</li>
							</ul>
						</li>
						<li>Faucibus porta lacus fringilla vel</li>
						<li>Aenean sit amet erat nunc</li>
						<li>Eget porttitor lorem</li>
					</ul>

					<ol>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Consectetur adipiscing elit</li>
						<li>Integer molestie lorem at massa</li>
						<li>Facilisis in pretium nisl aliquet</li>
						<li>Nulla volutpat aliquam velit</li>
						<li>Faucibus porta lacus fringilla vel</li>
						<li>Aenean sit amet erat nunc</li>
						<li>Eget porttitor lorem</li>
					</ol>

				</div>

				<p>For simpler styling, clear hierarchy, and better spacing, description lists have updated <code class="highlighter-rouge">margin</code>s. <code class="highlighter-rouge">&lt;dd&gt;</code>s reset <code class="highlighter-rouge">margin-left</code> to <code class="highlighter-rouge">0</code> and add <code class="highlighter-rouge">margin-bottom: .5rem</code>. <code class="highlighter-rouge">&lt;dt&gt;</code>s are <strong>bolded</strong>.</p>

				<div class="bd-example">

					<dl>
						<dt>Description lists</dt>
						<dd>A description list is perfect for defining terms.</dd>
						<dt>Euismod</dt>
						<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.</dd>
						<dd>Donec id elit non mi porta gravida at eget metus.</dd>
						<dt>Malesuada porta</dt>
						<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
					</dl>

				</div>

				<h2 id="preformatted-text">Preformatted text</h2>

				<p>The <code class="highlighter-rouge">&lt;pre&gt;</code> element is reset to remove its <code class="highlighter-rouge">margin-top</code> and use <code class="highlighter-rouge">rem</code> units for its <code class="highlighter-rouge">margin-bottom</code>.</p>

				<div class="bd-example">

					<pre>{`
						.example-element {
							margin - bottom: 1rem;
}
`}</pre>

				</div>

				<h2 id="tables">Tables</h2>

				<p>Tables are slightly adjusted to style <code class="highlighter-rouge">&lt;caption&gt;</code>s, collapse borders, and ensure consistent <code class="highlighter-rouge">text-align</code> throughout. Additional changes for borders, padding, and more come with <a href="/docs/4.0/content/tables/">the <code class="highlighter-rouge">.table</code> class</a>.</p>

				<div class="bd-example">
					<table>
						<caption>
							This is an example table, and this is its caption to describe the contents.
    </caption>
						<thead>
							<tr>
								<th>Table heading</th>
								<th>Table heading</th>
								<th>Table heading</th>
								<th>Table heading</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
							</tr>
							<tr>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
							</tr>
							<tr>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h2 id="forms">Forms</h2>

				<p>Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:</p>

				<ul>
					<li><code class="highlighter-rouge">&lt;fieldset&gt;</code>s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.</li>
					<li><code class="highlighter-rouge">&lt;legend&gt;</code>s, like fieldsets, have also been restyled to be displayed as a heading of sorts.</li>
					<li><code class="highlighter-rouge">&lt;label&gt;</code>s are set to <code class="highlighter-rouge">display: inline-block</code> to allow <code class="highlighter-rouge">margin</code> to be applied.</li>
					<li><code class="highlighter-rouge">&lt;input&gt;</code>s, <code class="highlighter-rouge">&lt;select&gt;</code>s, <code class="highlighter-rouge">&lt;textarea&gt;</code>s, and <code class="highlighter-rouge">&lt;button&gt;</code>s are mostly addressed by Normalize, but Reboot removes their <code class="highlighter-rouge">margin</code> and sets <code class="highlighter-rouge">line-height: inherit</code>, too.</li>
					<li><code class="highlighter-rouge">&lt;textarea&gt;</code>s are modified to only be resizable vertically as horizontal resizing often “breaks” page layout.</li>
				</ul>

				<p>These changes, and more, are demonstrated below.</p>

				<form class="bd-example">
					<fieldset>
						<legend>Example legend</legend>

						<p>
							<label for="input">Example input</label>
							<input type="text" id="input" placeholder="Example input" />
						</p>

						<p>
							<label for="select">Example select</label>
							<select id="select">
								<option value="">Choose...</option>
								<optgroup label="Option group 1">
									<option value="">Option 1</option>
									<option value="">Option 2</option>
									<option value="">Option 3</option>
								</optgroup>
								<optgroup label="Option group 2">
									<option value="">Option 4</option>
									<option value="">Option 5</option>
									<option value="">Option 6</option>
								</optgroup>
							</select>
						</p>

						<p>
							<label>
								<input type="checkbox" value="" />
								Check this checkbox
      </label>
						</p>

						<p>
							<label>
								<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
								Option one is this and that
      </label>
							<label>
								<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
								Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
							<label>
								<input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
								Option three is disabled
      </label>
						</p>

						<p>
							<label for="textarea">Example textarea</label>
							<textarea id="textarea" rows="3"></textarea>
						</p>

						<p>
							<label for="date">Example date</label>
							<input type="date" id="date" />
						</p>

						<p>
							<label for="time">Example time</label>
							<input type="time" id="time" />
						</p>

						<p>
							<label for="output">Example output</label>
							<output name="result" id="output">100</output>
						</p>

						<p>
							<button type="submit">Button submit</button>
							<input type="submit" value="Input submit button" />
							<input type="button" value="Input button" />
						</p>

						<p>
							<button type="submit" disabled="">Button submit</button>
							<input type="submit" value="Input submit button" disabled="" />
							<input type="button" value="Input button" disabled="" />
						</p>
					</fieldset>
				</form>

				<h2 id="misc-elements">Misc elements</h2>

				<h3 id="address">Address</h3>

				<p>The <code class="highlighter-rouge">&lt;address&gt;</code> element is updated to reset the browser default <code class="highlighter-rouge">font-style</code> from <code class="highlighter-rouge">italic</code> to <code class="highlighter-rouge">normal</code>. <code class="highlighter-rouge">line-height</code> is also now inherited, and <code class="highlighter-rouge">margin-bottom: 1rem</code> has been added. <code class="highlighter-rouge">&lt;address&gt;</code>s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with <code class="highlighter-rouge">&lt;br&gt;</code>.</p>

				<div class="bd-example">
					<address>
						<strong>Twitter, Inc.</strong><br />
						1355 Market St, Suite 900<br />
						San Francisco, CA 94103<br />
						<abbr title="Phone">P:</abbr> (123) 456-7890
  </address>

					<address>
						<strong>Full Name</strong><br />
						<a href="mailto:#">first.last@example.com</a>
					</address>
				</div>

				<h3 id="blockquote">Blockquote</h3>

				<p>The default <code class="highlighter-rouge">margin</code> on blockquotes is <code class="highlighter-rouge">1em 40px</code>, so we reset that to <code class="highlighter-rouge">0 0 1rem</code> for something more consistent with other elements.</p>

				<div class="bd-example">
					<blockquote class="blockquote">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						<footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
					</blockquote>
				</div>

				<h3 id="inline-elements">Inline elements</h3>

				<p>The <code class="highlighter-rouge">&lt;abbr&gt;</code> element receives basic styling to make it stand out amongst paragraph text.</p>

				<div class="bd-example">
					Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.
</div>

				<h3 id="summary">Summary</h3>

				<p>The default <code class="highlighter-rouge">cursor</code> on summary is <code class="highlighter-rouge">text</code>, so we reset that to <code class="highlighter-rouge">pointer</code> to convey that the element can be interacted with by clicking on it.</p>

				<div class="bd-example">
					<details>
						<summary>Some details</summary>
						<p>More info about the details.</p>
					</details>

					<details open="">
						<summary>Even more details</summary>
						<p>Here are even more details about the details.</p>
					</details>
				</div>

				<h2 id="html5-hidden-attribute">HTML5 <code class="highlighter-rouge">[hidden]</code> attribute</h2>

				<p>HTML5 adds <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden">a new global attribute named <code class="highlighter-rouge">[hidden]</code></a>, which is styled as <code class="highlighter-rouge">display: none</code> by default. Borrowing an idea from <a href="https://purecss.io/">PureCSS</a>, we improve upon this default by making <code class="highlighter-rouge">[hidden] {`{display: none !important; }`}</code> to help prevent its <code class="highlighter-rouge">display</code> from getting accidentally overridden. While <code class="highlighter-rouge">[hidden]</code> isn’t natively supported by IE10, the explicit declaration in our CSS gets around that problem.</p>

				<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">hidden</span><span class="nt">&gt;</span></code></pre></figure>

				<div class="bd-callout bd-callout-warning">
					<h5 id="jquery-incompatibility">jQuery incompatibility</h5>

					<p><code class="highlighter-rouge">[hidden]</code> is not compatible with jQuery’s <code class="highlighter-rouge">$(...).hide()</code> and <code class="highlighter-rouge">$(...).show()</code> methods. Therefore, we don’t currently especially endorse <code class="highlighter-rouge">[hidden]</code> over other techniques for managing the <code class="highlighter-rouge">display</code> of elements.</p>
				</div>

				<p>To merely toggle the visibility of an element, meaning its <code class="highlighter-rouge">display</code> is not modified and the element can still affect the flow of the document, use <a href="/docs/4.0/utilities/visibility/">the <code class="highlighter-rouge">.invisible</code> class</a> instead.</p>


			</div>
		);
	}

}

export default DemoPage;
