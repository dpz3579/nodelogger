const logger = require('../index');

logger.error("It's an error", {
  "id": 2
}, {
  "action": "delete"
});
logger.info('Found %s at %s', 'error', new Date());
logger.log("error %s", 'Found something');

logger.warn("Warning to be shown here");
logger.info("This is a info log");
logger.error("Error!", {
  message: "Error was occured coz of indexing on mongodb",
  code: "E1100",
  stackTrace: "/tmp/com.apple.mobileassetd/AssetsV2/com_apple_MobileAsset_CoreSuggestions/b12f8d9c57a18761d46e8b3850ec2b6e1b59ca46.asset/AssetData/StructuredEventModel.mlmodelc/model"
});
