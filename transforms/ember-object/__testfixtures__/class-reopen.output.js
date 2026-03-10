/**
 * Copyright IBM Corp. 2018, 2022
 */

import classic from 'ember-classic-decorator';
import EmberObject from '@ember/object';

@classic
class Foo extends EmberObject {}

Foo.reopenClass({});

export default Foo;
