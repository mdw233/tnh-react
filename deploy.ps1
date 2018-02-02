
npm run build

aws s3 cp build s3://tnh-react --recursive --acl=public-reada