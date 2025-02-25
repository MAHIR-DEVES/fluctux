import { DocNavListType } from "@/components/core/docs";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface docPaginateStateType {
  next: DocNavListType | null;
  prev: DocNavListType | null;
}

const initialState: docPaginateStateType = {
  next: null,
  prev: null,
};

export const docPaginateSlice = createSlice({
  name: "docPaginate",
  initialState,
  reducers: {
    setPagination: (
      state,
      action: PayloadAction<{
        currentIndex: number;
        flatDocList: DocNavListType[];
      }>
    ) => {
      const { currentIndex, flatDocList } = action.payload;
      state.prev = currentIndex > 0 ? flatDocList[currentIndex - 1] : null;
      state.next =
        currentIndex < flatDocList.length - 1
          ? flatDocList[currentIndex + 1]
          : null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPagination } = docPaginateSlice.actions;

export default docPaginateSlice.reducer;
