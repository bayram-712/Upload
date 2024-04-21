import { create } from "zustand";
const fileStore = ( set ) => ( {
  files: [],
  get: ( file ) => set( ( store ) => ( { files: store.files.concat( file ) } ) ),
  del: ( name ) => set( ( store ) => ( {
    files: store.files.filter( ( file ) => (
      file.name !== name
    ) )
  } ) )
} );

export const useFileStore = create( fileStore );