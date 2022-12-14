import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as widget_service from '../lib/widget_service';

export class MyWidgetServiceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new widget_service.WidgetService(this, 'Widgets');
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MyWidgetServiceQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
