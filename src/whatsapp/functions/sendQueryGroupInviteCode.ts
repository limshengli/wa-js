/*!
 * Copyright 2021 WPPConnect Team
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

import * as webpack from '../../webpack';
import { Wid } from '..';
import { exportModule } from '../exportModule';
import { fetchMexGroupInviteCode } from './';

/** @whatsapp 65705 */
export declare function sendQueryGroupInviteCode(groupId: Wid): Promise<string>;

exportModule(
  exports,
  {
    sendQueryGroupInviteCode: 'sendQueryGroupInviteCode',
  },
  (m) => m.sendQueryGroupInviteCode
);

webpack.injectFallbackModule('sendQueryGroupInviteCode', {
  sendQueryGroupInviteCode: async (groupId: Wid) => {
    return await fetchMexGroupInviteCode(groupId);
  },
});
