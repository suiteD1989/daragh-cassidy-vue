echo "Running staging build..."

npm run build

#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

echo "$parent_path"

rm -rf $parent_path/production_bundle

mkdir -p production_bundle

sleep 1s

echo "Adding files to staging_bundle for zipping..."

rsync -av --exclude .elasticbeanstalk --exclude deploy_production.sh --exclude deploy_staging.sh --exclude bundle.zip --exclude production_bundle.zip --exclude .git* --exclude node_modules* --exclude production_bundle* --exclude staging_bundle* $parent_path/ production_bundle/

echo "Zipping staging_bundle directory..."

cd production_bundle
zip -r $parent_path/bundle.zip .

echo "Zip file completed!"

sleep 1s

echo "Uploading file to S3..."

aws s3 cp $parent_path/bundle.zip s3://daragh-cassidy-production/application/bundle.zip

echo "S3 upload complete. CodePipeline triggered, please check AWS console..."