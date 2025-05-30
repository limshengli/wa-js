/*!
 * Copyright 2024 WPPConnect Team
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

import { GroupMetadataStore, Wid } from '../../whatsapp';
import { getSubgroups } from './getSubgroups';

/**
 * Get the default announcement group of a community
 * You can pass any group id inside a community
 *
 * @example
 * ```javascript
 * WPP.community.getAnnouncementGroup('123456@g.us');
 * ```
 *
 * @category Community
 */

export function getAnnouncementGroup(
  communityId: string | Wid
): Wid | undefined {
  const allGroups = getSubgroups(communityId);
  for (const group of allGroups) {
    const groupData = GroupMetadataStore.get(group.toString());
    if (groupData?.groupType == 'LINKED_ANNOUNCEMENT_GROUP') {
      return groupData.id;
    }
  }
  return undefined;
}
