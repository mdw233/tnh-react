
npm run build

aws s3 cp build s3://tweets-near-here.com --recursive --acl=public-read