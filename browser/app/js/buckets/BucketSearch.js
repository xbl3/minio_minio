/*
 * Minio Cloud Storage (C) 2018 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import { connect } from "react-redux"
import * as actionsBuckets from "./actions"

export const BucketSearch = ({ onChange }) => (
  <div className="buckets__search">
    <div className="form-group form-group--icon">
      <i className="form-group__icon zmdi zmdi-search" />
      <input
        className="form-group__field"
        type="text"
        onChange={e => onChange(e.target.value)}
        placeholder="Search Buckets..."
      />
      <i className="form-group__helper" />
    </div>
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    onChange: filter => {
      dispatch(actionsBuckets.setFilter(filter))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(BucketSearch)
