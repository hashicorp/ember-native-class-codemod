#!/usr/bin/env node
/**
 * Copyright IBM Corp. 2018, 2022
 */

'use strict';

const { gatherTelemetry, analyzeEmberObject } = require('ember-codemods-telemetry-helpers');

gatherTelemetry(process.argv[2], analyzeEmberObject);
