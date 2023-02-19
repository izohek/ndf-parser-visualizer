To generate file list you can work with using powershell:
- Navigate to patch file directory
- powershell run: `Get-ChildItem -Recurse  | Resolve-Path -Relative`
