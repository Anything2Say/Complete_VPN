#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkLearningPathStack } from '../lib/cdk-learning_path-stack';

const app = new cdk.App();
new CdkLearningPathStack(app, 'CdkLearningPathStack');
