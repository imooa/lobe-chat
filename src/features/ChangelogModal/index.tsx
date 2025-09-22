'use client';

import { useTimeout } from 'ahooks';
import { memo } from 'react';

import { useGlobalStore } from '@/store/global';

const ChangelogModal = memo<{ currentId?: string }>(({ currentId }) => {
  const [latestChangelogId, updateSystemStatus] = useGlobalStore((s) => [
    s.status.latestChangelogId,
    s.updateSystemStatus,
  ]);

  useTimeout(() => {
    if (!currentId) return;
    if (!latestChangelogId) {
      updateSystemStatus({ latestChangelogId: currentId });
    }
    // Changelog modal disabled as per rebranding requirements
    // else if (latestChangelogId !== currentId) {
    //   router.push('/changelog/modal');
    // }
  }, 1000);

  return null;
});

export default ChangelogModal;
