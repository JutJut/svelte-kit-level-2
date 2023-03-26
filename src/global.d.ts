/// <reference types="@sveltejs/kit" />

declare interface Window {
  __theme: 'light' | 'dark';
  __setUserTheme: (theme) => void;
}
