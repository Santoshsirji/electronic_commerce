import { create } from 'zustand';

import { ProductWithRelations } from '@/types';

interface PreviewModalStore {
    isOpen: boolean;
    data?: ProductWithRelations;
    onOpen: (data: ProductWithRelations) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: ProductWithRelations) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;