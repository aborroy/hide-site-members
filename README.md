# Alfresco Share Hide Site Members Link

This is a Share project for Alfresco SDK 4.3 (ACS 7.1)

**Members** link for Site Dashboard is only visible to Alfresco Administrator users.

## Building the project

The project can be built using regular Maven command.

```
$ mvn clean package
```

You'll find `hide-site-members-1.0.0.jar` Share addon in `target` folder ready to be deployed to ACS after that.

## Share extension

[hide-site-members-extension.xml](src/main/resources/alfresco/web-extension/site-data/extensions/hide-site-members-extension.xml) declares a simple extension for [org.alfresco.share.header](https://github.com/Alfresco/alfresco-community-share/tree/release/7.1.0/share/src/main/resources/alfresco/site-webscripts/org/alfresco/share/header) package. This package contains the `share-header.get.js` file that is being extended.

[share-header.get.js](src/main/resources/alfresco/web-extension/site-webscripts/org/alfresco/custom/share-header.get.js) contains the logic to hide the link for users that are not Alfresco Administrators.
