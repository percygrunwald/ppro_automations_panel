# PPROAutomationsPanel

An Adobe CEP (Common Extensibility Platform) panel for Adobe Premiere Pro (PPRO).

## Quick start

After following the installation, add `ACTIONS` to `src/js/actions.js` to call functions in `src/jsx/ppro_functions.jsx` (ExtendScript functions). Each `key => function` pair in `ACTIONS` will get its own button in the panel UI.

## Installation

Clone the repo:

```
cd ~/Code
git clone ...
```

Symlink the repo into your user's extensions directory:

```
ln -s ~/Code/ppro_automations_panel ~/Library/Application\ Support/Adobe/CEP/extensions/ppro_automations_panel
```

Enable running unsigned extensions, for your [CEP version](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_11.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep):

```
CEP_VERSION=11
defaults write "com.adobe.CSXS.$CEP_VERSION" PlayerDebugMode 1

# Kill cfprefsd to reload prefs
sudo pkill cfprefsd
```
