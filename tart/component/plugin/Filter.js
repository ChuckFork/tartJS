// Copyright 2011 Tart. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview tart.component.plugin.Filter model filter plugin.
 */

goog.provide('tart.component.plugin.Filter');

goog.require('goog.structs.Map');


/**
 * @param {tart.component.Model} model
 * @constructor
 */
tart.component.plugin.Filter = function (model) {
    /** @private */
    this.model_ = model;

    this.filterBy_ = new goog.structs.Map();
};

/**
 * @param {string} field field to be filtereded.
 * @param {string} condition condition operator.
 * @param {string} value field value to filter field for.
 */
tart.component.plugin.Filter.prototype.addFilter = function (field, condition, value) {
    var fieldFilter = this.filterBy_.get(field);

    if (!fieldFilter) {
        fieldFilter = {};
    }
    fieldFilter[condition] = value;

    this.filterBy_.set(field, fieldFilter);

    this.model_.params.set('filterBy_', this.filterBy_.toObject());
};
