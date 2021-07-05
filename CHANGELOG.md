# Jason Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## 2.0.2 - 2021-06-05

### Fixed

- Fix graphql query (String cannot represent value).

## 2.0.1 - 2020-05-11

### Fixed

- Fix settings not showing when other Vue based plugins interfere.

## 2.0.0 - 2020-05-10

### Added

- Syntax highlighting for when editing raw JSON data.

### Changed

- Jason now requires Craft CMS 3.4 or above.

### Fixed

- Fixed issue where certain circumstances would allow for editing when readonly is set to true.
- Fixed issue where field settings weren't loading within Matrix fields.
- Fixed issue where multiple Jason fields on a single edit screen (including Matrix fields - thanks @kristoffeys) wouldn't render.
- Fixed issue where settings field wasn't loading properly on Craft 3.4+.
- Fixed issue with setting field values programattically from other plugins (thanks @goraxan!)

## 1.0.2 - 2019-05-27

### Fixed

- Fixed issue with textareas being the incorrect height when switching tabs

## 1.0.1 - 2019-05-02

### Fixed

- Fix bug preventing some field settings from loading

## 1.0.0 - 2019-05-01

### Added

- Initial release
