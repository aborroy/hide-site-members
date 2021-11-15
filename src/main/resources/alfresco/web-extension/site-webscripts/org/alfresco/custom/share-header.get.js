var siteMembers = widgetUtils.findObject(model.jsonModel, "id", "HEADER_SITE_MEMBERS");
if (!user.isAdmin) {
  widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_SITE_MEMBERS");
}