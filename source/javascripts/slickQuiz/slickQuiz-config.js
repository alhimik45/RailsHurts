var quizJSON={"info":{"name":"Ruby or Ruby on Rails?","main":"Let's check whether you remember where Ruby ends and Rails starts","results":"<h5>Learn More</h5><p></p>","level1":"Ruby expert!","level2":"Perfect!","level3":"Not bad!","level4":"Nice try","level5":"Seriously?"},"questions":[{"q":"<pre class='prettyprint'>with_options</pre>","id":1,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p><pre class='prettyprint'>with_options(options, &block)</pre>\n<p>An elegant way to factor duplication out of options passed to a series of method calls.\nEach method called in the block, with the block variable as the receiver,\nwill have its options merged with the default options hash provided.\nEach method called on the block variable must take an options hash as its final argumen</p>\n<p><a href='http://api.rubyonrails.org/?q=with_options'>api.rubyonrails.org</a></p>\n","incorrect":"<p><span>No, this is not Ruby</span></p><pre class='prettyprint'>with_options(options, &block)</pre>\n<p>An elegant way to factor duplication out of options passed to a series of method calls.\nEach method called in the block, with the block variable as the receiver,\nwill have its options merged with the default options hash provided.\nEach method called on the block variable must take an options hash as its final argumen</p>\n<p><a href='http://api.rubyonrails.org/?q=with_options'>api.rubyonrails.org</a></p>\n"},{"q":"<pre class='prettyprint'>reverse_merge</pre>","id":2,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>DateTime.current</pre>","id":3,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>Array(foo: :bar)      # => [[:foo, :bar]]</pre>","id":4,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>.to_json</pre>","id":5,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>Date.today</pre>","id":6,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>a.cycle { |x| puts x }     # print, a, b, c, a, b, c,.. forever..</pre>","id":7,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>Time.now</pre>","id":8,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>.downcase!</pre>","id":9,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>class_attribute</pre>","id":10,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>alias_attribute</pre>","id":11,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>.duplicable?</pre>","id":12,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>Array.wrap(nil)     # => [] Array.wrap([1, 2, 3]) # => [1, 2, 3] Array.wrap(0)    # => [0]</pre>","id":13,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>'hello'.at(4)  # => 'o'</pre>","id":14,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>aaa.instance_values</pre>","id":15,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>1.in?([1,2])</pre>","id":16,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>M.reachable?</pre>","id":17,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>delegate</pre>","id":18,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>descendants</pre>","id":19,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>.to_xml</pre>","id":20,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>(1..10).include?(3..7)  # => true </br> (1..10).include?(0..7)  # => false</pre>","id":21,"a":[{"option":"Rails","correct":true},{"option":"Ruby","correct":false}],"correct":"<p><span>Yes, this is Rails</span></p>","incorrect":"<p><span>No, this is not Ruby</span></p>"},{"q":"<pre class='prettyprint'>Hash[]</pre>","id":22,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>.superclass</pre>","id":23,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>420.modulo(4)</pre>","id":24,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>[1,2,3,4,5].sample</pre>","id":25,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>'[%s] % 'same old drag'             # => '[same old drag]'</pre>","id":26,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"},{"q":"<pre class='prettyprint'>FileUtils.rm_r ‘somedir'</pre>","id":27,"a":[{"option":"Rails","correct":false},{"option":"Ruby","correct":true}],"correct":"<p><span>Yes, this is Ruby</span></p>","incorrect":"<p><span>No, this is not Rails</span></p>"}]};