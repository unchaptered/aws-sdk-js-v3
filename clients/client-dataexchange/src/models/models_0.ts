// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { DataExchangeServiceException as __BaseException } from "./DataExchangeServiceException";

/**
 * <p>Access to the resource is denied.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Access to the resource is denied.</p>
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

export enum ServerSideEncryptionTypes {
  AES256 = "AES256",
  aws_kms = "aws:kms",
}

/**
 * <p>Encryption configuration of the export job. Includes the encryption type in addition to the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption. type.</p>
 */
export interface ExportServerSideEncryption {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects. This parameter is required if you choose aws:kms as an encryption type.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The type of server side encryption used for encrypting the objects in Amazon S3.</p>
   */
  Type: ServerSideEncryptionTypes | string | undefined;
}

export namespace ExportServerSideEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportServerSideEncryption): any => ({
    ...obj,
  });
}

/**
 * <p>A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.</p>
 */
export interface AutoExportRevisionDestinationEntry {
  /**
   * <p>The S3 bucket that is the destination for the event action.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.</p>
   */
  KeyPattern?: string;
}

export namespace AutoExportRevisionDestinationEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoExportRevisionDestinationEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface AutoExportRevisionToS3RequestDetails {
  /**
   * <p>Encryption configuration for the auto export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.</p>
   */
  RevisionDestination: AutoExportRevisionDestinationEntry | undefined;
}

export namespace AutoExportRevisionToS3RequestDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoExportRevisionToS3RequestDetails): any => ({
    ...obj,
  });
}

/**
 * <p>What occurs after a certain event.</p>
 */
export interface Action {
  /**
   * <p>Details for the export revision to Amazon S3 action.</p>
   */
  ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails;
}

export namespace Action {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
}

export enum ProtocolType {
  REST = "REST",
}

/**
 * <p>The API Gateway API that is the asset.</p>
 */
export interface ApiGatewayApiAsset {
  /**
   * <p>The API description of the API asset.</p>
   */
  ApiDescription?: string;

  /**
   * <p>The API endpoint of the API asset.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>The unique identifier of the API asset.</p>
   */
  ApiId?: string;

  /**
   * <p>The API key of the API asset.</p>
   */
  ApiKey?: string;

  /**
   * <p>The API name of the API asset.</p>
   */
  ApiName?: string;

  /**
   * <p>The download URL of the API specification of the API asset.</p>
   */
  ApiSpecificationDownloadUrl?: string;

  /**
   * <p>The date and time that the upload URL expires, in ISO 8601 format.</p>
   */
  ApiSpecificationDownloadUrlExpiresAt?: Date;

  /**
   * <p>The protocol type of the API asset.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The stage of the API asset.</p>
   */
  Stage?: string;
}

export namespace ApiGatewayApiAsset {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiGatewayApiAsset): any => ({
    ...obj,
  });
}

/**
 * <p>The destination for the asset.</p>
 */
export interface AssetDestinationEntry {
  /**
   * <p>The unique identifier for the asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The S3 bucket that is the destination for the asset.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the object in Amazon S3 for the asset.</p>
   */
  Key?: string;
}

export namespace AssetDestinationEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetDestinationEntry): any => ({
    ...obj,
  });
}

/**
 * The Amazon Redshift datashare asset.
 */
export interface RedshiftDataShareAsset {
  /**
   * The Amazon Resource Name (ARN) of the datashare asset.
   */
  Arn: string | undefined;
}

export namespace RedshiftDataShareAsset {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftDataShareAsset): any => ({
    ...obj,
  });
}

/**
 * <p>The S3 object that is the asset.</p>
 */
export interface S3SnapshotAsset {
  /**
   * <p>The size of the S3 object that is the object.</p>
   */
  Size: number | undefined;
}

export namespace S3SnapshotAsset {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3SnapshotAsset): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the asset.</p>
 */
export interface AssetDetails {
  /**
   * <p>The S3 object that is the asset.</p>
   */
  S3SnapshotAsset?: S3SnapshotAsset;

  /**
   * <p>The Amazon Redshift datashare that is the asset.</p>
   */
  RedshiftDataShareAsset?: RedshiftDataShareAsset;

  /**
   * <p>Information about the API Gateway API asset.</p>
   */
  ApiGatewayApiAsset?: ApiGatewayApiAsset;
}

export namespace AssetDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetDetails): any => ({
    ...obj,
  });
}

export enum AssetType {
  API_GATEWAY_API = "API_GATEWAY_API",
  REDSHIFT_DATA_SHARE = "REDSHIFT_DATA_SHARE",
  S3_SNAPSHOT = "S3_SNAPSHOT",
}

/**
 * <p>An asset in AWS Data Exchange is a piece of data (S3 object) or a means of fulfilling data (Amazon Redshift datashare or Amazon API Gateway API). The asset can be a structured data file, an image file, or some other data file that can be stored as an S3 object, an Amazon API Gateway API, or an Amazon Redshift datashare. When you create an import job for your files, API Gateway APIs, or Amazon Redshift datashares, you create an asset in AWS Data Exchange.</p>
 */
export interface AssetEntry {
  /**
   * <p>The ARN for the asset.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Information about the asset.</p>
   */
  AssetDetails: AssetDetails | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType: AssetType | string | undefined;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the asset.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace AssetEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetEntry): any => ({
    ...obj,
  });
}

/**
 * <p>The source of the assets.</p>
 */
export interface AssetSourceEntry {
  /**
   * <p>The S3 bucket that's part of the source of the asset.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the object in Amazon S3 for the asset.</p>
   */
  Key: string | undefined;
}

export namespace AssetSourceEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetSourceEntry): any => ({
    ...obj,
  });
}

export interface CancelJobRequest {
  /**
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

export namespace CancelJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj,
  });
}

export enum ResourceType {
  ASSET = "ASSET",
  DATA_SET = "DATA_SET",
  EVENT_ACTION = "EVENT_ACTION",
  JOB = "JOB",
  REVISION = "REVISION",
}

/**
 * <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
   */
  Message: string | undefined;

  /**
   * <p>The unique identifier for the resource with the conflict.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the resource with the conflict.</p>
   */
  ResourceType?: ResourceType | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * An exception occurred with the service.
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * The message identifying the service exception that occurred.
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource couldn't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource couldn't be found.</p>
   */
  Message: string | undefined;

  /**
   * <p>The unique identifier for the resource that couldn't be found.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource that couldn't be found.</p>
   */
  ResourceType?: ResourceType | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The limit on the number of requests per second was exceeded.</p>
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

export enum ExceptionCause {
  InsufficientS3BucketPolicy = "InsufficientS3BucketPolicy",
  S3AccessDenied = "S3AccessDenied",
}

/**
 * <p>The request was invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message that informs you about what was invalid about the request.</p>
   */
  Message: string | undefined;

  /**
   * <p>The message that informs you about what the exception was.</p>
   */
  ExceptionCause?: ExceptionCause | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.ExceptionCause = opts.ExceptionCause;
  }
}

export enum Code {
  ACCESS_DENIED_EXCEPTION = "ACCESS_DENIED_EXCEPTION",
  INTERNAL_SERVER_EXCEPTION = "INTERNAL_SERVER_EXCEPTION",
  MALWARE_DETECTED = "MALWARE_DETECTED",
  MALWARE_SCAN_ENCRYPTED_FILE = "MALWARE_SCAN_ENCRYPTED_FILE",
  RESOURCE_NOT_FOUND_EXCEPTION = "RESOURCE_NOT_FOUND_EXCEPTION",
  SERVICE_QUOTA_EXCEEDED_EXCEPTION = "SERVICE_QUOTA_EXCEEDED_EXCEPTION",
  VALIDATION_EXCEPTION = "VALIDATION_EXCEPTION",
}

/**
 * <p>The request body for CreateDataSet.</p>
 */
export interface CreateDataSetRequest {
  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType: AssetType | string | undefined;

  /**
   * <p>A description for the data set. This value can be up to 16,348 characters long.</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the data set.</p>
   */
  Name: string | undefined;

  /**
   * <p>A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDataSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSetRequest): any => ({
    ...obj,
  });
}

export enum Origin {
  ENTITLED = "ENTITLED",
  OWNED = "OWNED",
}

/**
 * <p>Information about the origin of the data set.</p>
 */
export interface OriginDetails {
  /**
   * <p>The product ID of the origin of the data set.</p>
   */
  ProductId: string | undefined;
}

export namespace OriginDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginDetails): any => ({
    ...obj,
  });
}

export interface CreateDataSetResponse {
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin | string;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the data set.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace CreateDataSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSetResponse): any => ({
    ...obj,
  });
}

export enum LimitName {
  Amazon_API_Gateway_API_assets_per_revision = "Amazon API Gateway API assets per revision",
  Amazon_Redshift_datashare_assets_per_import_job_from_Redshift = "Amazon Redshift datashare assets per import job from Redshift",
  Amazon_Redshift_datashare_assets_per_revision = "Amazon Redshift datashare assets per revision",
  Asset_per_export_job_from_Amazon_S3 = "Asset per export job from Amazon S3",
  Asset_size_in_GB = "Asset size in GB",
  Assets_per_import_job_from_Amazon_S3 = "Assets per import job from Amazon S3",
  Assets_per_revision = "Assets per revision",
  Auto_export_event_actions_per_data_set = "Auto export event actions per data set",
  Concurrent_in_progress_jobs_to_export_assets_to_Amazon_S3 = "Concurrent in progress jobs to export assets to Amazon S3",
  Concurrent_in_progress_jobs_to_export_assets_to_a_signed_URL = "Concurrent in progress jobs to export assets to a signed URL",
  Concurrent_in_progress_jobs_to_export_revisions_to_Amazon_S3 = "Concurrent in progress jobs to export revisions to Amazon S3",
  Concurrent_in_progress_jobs_to_import_assets_from_Amazon_Redshift_datashares = "Concurrent in progress jobs to import assets from Amazon Redshift datashares",
  Concurrent_in_progress_jobs_to_import_assets_from_Amazon_S3 = "Concurrent in progress jobs to import assets from Amazon S3",
  Concurrent_in_progress_jobs_to_import_assets_from_a_signed_URL = "Concurrent in progress jobs to import assets from a signed URL",
  Concurrent_in_progress_jobs_to_import_assets_from_an_API_Gateway_API = "Concurrent in progress jobs to import assets from an API Gateway API",
  Data_sets_per_account = "Data sets per account",
  Data_sets_per_product = "Data sets per product",
  Event_actions_per_account = "Event actions per account",
  Products_per_account = "Products per account",
  Revisions_per_Amazon_API_Gateway_API_data_set = "Revisions per Amazon API Gateway API data set",
  Revisions_per_Amazon_Redshift_datashare_data_set = "Revisions per Amazon Redshift datashare data set",
  Revisions_per_data_set = "Revisions per data set",
}

/**
 * <p>The request has exceeded the quotas imposed by the service.</p>
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name: "ServiceLimitExceededException" = "ServiceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the quota that was exceeded.</p>
   */
  LimitName?: LimitName | string;

  /**
   * <p>The maximum value for the service-specific limit.</p>
   */
  LimitValue?: number;

  /**
   * <p>The request has exceeded the quotas imposed by the service.</p>
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceededException, __BaseException>) {
    super({
      name: "ServiceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceededException.prototype);
    this.LimitName = opts.LimitName;
    this.LimitValue = opts.LimitValue;
    this.Message = opts.Message;
  }
}

/**
 * <p>Information about the published revision.</p>
 */
export interface RevisionPublished {
  /**
   * <p>The data set ID of the published revision.</p>
   */
  DataSetId: string | undefined;
}

export namespace RevisionPublished {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevisionPublished): any => ({
    ...obj,
  });
}

/**
 * <p>What occurs to start an action.</p>
 */
export interface Event {
  /**
   * <p>What occurs to start the revision publish action.</p>
   */
  RevisionPublished?: RevisionPublished;
}

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

/**
 * <p>The request body for CreateEventAction.</p>
 */
export interface CreateEventActionRequest {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action: Action | undefined;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event: Event | undefined;
}

export namespace CreateEventActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventActionRequest): any => ({
    ...obj,
  });
}

export interface CreateEventActionResponse {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * <p>The ARN for the event action.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event?: Event;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  Id?: string;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace CreateEventActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventActionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportAssetsToS3RequestDetails {
  /**
   * <p>The destination for the asset.</p>
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration for the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>The unique identifier for the revision associated with this export request.</p>
   */
  RevisionId: string | undefined;
}

export namespace ExportAssetsToS3RequestDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportAssetsToS3RequestDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportAssetToSignedUrlRequestDetails {
  /**
   * <p>The unique identifier for the asset that is exported to a signed URL.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export request.</p>
   */
  RevisionId: string | undefined;
}

export namespace ExportAssetToSignedUrlRequestDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportAssetToSignedUrlRequestDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The destination where the assets in the revision will be exported.</p>
 */
export interface RevisionDestinationEntry {
  /**
   * <p>The S3 bucket that is the destination for the assets in the revision.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.</p>
   */
  KeyPattern?: string;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace RevisionDestinationEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevisionDestinationEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportRevisionsToS3RequestDetails {
  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration for the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>The destination for the revision.</p>
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;
}

export namespace ExportRevisionsToS3RequestDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportRevisionsToS3RequestDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The request details.</p>
 */
export interface ImportAssetFromApiGatewayApiRequestDetails {
  /**
   * <p>The API description. Markdown supported.</p>
   */
  ApiDescription?: string;

  /**
   * <p>The API Gateway API ID.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The API Gateway API key.</p>
   */
  ApiKey?: string;

  /**
   * <p>The API name.</p>
   */
  ApiName: string | undefined;

  /**
   * <p>The Base64-encoded MD5 hash of the OpenAPI 3.0 JSON API specification file. It is used to ensure the integrity of the file.</p>
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * <p>The data set ID.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The protocol type.</p>
   */
  ProtocolType: ProtocolType | string | undefined;

  /**
   * <p>The revision ID.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

export namespace ImportAssetFromApiGatewayApiRequestDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportAssetFromApiGatewayApiRequestDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ImportAssetFromSignedUrlRequestDetails {
  /**
   * <p>The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name.</p>
   */
  AssetName: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.</p>
   */
  Md5Hash: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import request.</p>
   */
  RevisionId: string | undefined;
}

export namespace ImportAssetFromSignedUrlRequestDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportAssetFromSignedUrlRequestDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The source of the Amazon Redshift datashare asset.</p>
 */
export interface RedshiftDataShareAssetSourceEntry {
  /**
   * The Amazon Resource Name (ARN) of the datashare asset.
   */
  DataShareArn: string | undefined;
}

export namespace RedshiftDataShareAssetSourceEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftDataShareAssetSourceEntry): any => ({
    ...obj,
  });
}

/**
 * Details from an import from Amazon Redshift datashare request.
 */
export interface ImportAssetsFromRedshiftDataSharesRequestDetails {
  /**
   * A list of Amazon Redshift datashare assets.
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this import job.
   */
  RevisionId: string | undefined;
}

export namespace ImportAssetsFromRedshiftDataSharesRequestDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportAssetsFromRedshiftDataSharesRequestDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ImportAssetsFromS3RequestDetails {
  /**
   * <p>Is a list of S3 bucket and object key pairs.</p>
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import request.</p>
   */
  RevisionId: string | undefined;
}

export namespace ImportAssetsFromS3RequestDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportAssetsFromS3RequestDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The details for the request.</p>
 */
export interface RequestDetails {
  /**
   * <p>Details about the export to signed URL request.</p>
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;

  /**
   * <p>Details about the export to Amazon S3 request.</p>
   */
  ExportAssetsToS3?: ExportAssetsToS3RequestDetails;

  /**
   * <p>Details about the export to Amazon S3 request.</p>
   */
  ExportRevisionsToS3?: ExportRevisionsToS3RequestDetails;

  /**
   * <p>Details about the import from signed URL request.</p>
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;

  /**
   * <p>Details about the import from Amazon S3 request.</p>
   */
  ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;

  /**
   * <p>Details from an import from Amazon Redshift datashare request.</p>
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesRequestDetails;

  /**
   * <p>Information about the import asset from API Gateway API request.</p>
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiRequestDetails;
}

export namespace RequestDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestDetails): any => ({
    ...obj,
  });
}

export enum Type {
  EXPORT_ASSETS_TO_S3 = "EXPORT_ASSETS_TO_S3",
  EXPORT_ASSET_TO_SIGNED_URL = "EXPORT_ASSET_TO_SIGNED_URL",
  EXPORT_REVISIONS_TO_S3 = "EXPORT_REVISIONS_TO_S3",
  IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES = "IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES",
  IMPORT_ASSETS_FROM_S3 = "IMPORT_ASSETS_FROM_S3",
  IMPORT_ASSET_FROM_API_GATEWAY_API = "IMPORT_ASSET_FROM_API_GATEWAY_API",
  IMPORT_ASSET_FROM_SIGNED_URL = "IMPORT_ASSET_FROM_SIGNED_URL",
}

/**
 * <p>The request body for CreateJob.</p>
 */
export interface CreateJobRequest {
  /**
   * <p>The details for the CreateJob request.</p>
   */
  Details: RequestDetails | undefined;

  /**
   * <p>The type of job to be created.</p>
   */
  Type: Type | string | undefined;
}

export namespace CreateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the export to Amazon S3 response.</p>
 */
export interface ExportAssetsToS3ResponseDetails {
  /**
   * <p>The destination in Amazon S3 where the asset is exported.</p>
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration of the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>The unique identifier for the revision associated with this export response.</p>
   */
  RevisionId: string | undefined;
}

export namespace ExportAssetsToS3ResponseDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportAssetsToS3ResponseDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the export to signed URL response.</p>
 */
export interface ExportAssetToSignedUrlResponseDetails {
  /**
   * <p>The unique identifier for the asset associated with this export job.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export response.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The signed URL for the export request.</p>
   */
  SignedUrl?: string;

  /**
   * <p>The date and time that the signed URL expires, in ISO 8601 format.</p>
   */
  SignedUrlExpiresAt?: Date;
}

export namespace ExportAssetToSignedUrlResponseDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportAssetToSignedUrlResponseDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the export revisions to Amazon S3 response.</p>
 */
export interface ExportRevisionsToS3ResponseDetails {
  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration of the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>The destination in Amazon S3 where the revision is exported.</p>
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the event action.</p>
   */
  EventActionArn?: string;
}

export namespace ExportRevisionsToS3ResponseDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportRevisionsToS3ResponseDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The response details.</p>
 */
export interface ImportAssetFromApiGatewayApiResponseDetails {
  /**
   * <p>The API description.</p>
   */
  ApiDescription?: string;

  /**
   * <p>The API ID.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The API key.</p>
   */
  ApiKey?: string;

  /**
   * <p>The API name.</p>
   */
  ApiName: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the API asset, used to ensure the integrity of the API at that location.</p>
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * <p>The upload URL of the API specification.</p>
   */
  ApiSpecificationUploadUrl: string | undefined;

  /**
   * <p>The date and time that the upload URL expires, in ISO 8601 format.</p>
   */
  ApiSpecificationUploadUrlExpiresAt: Date | undefined;

  /**
   * <p>The data set ID.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The protocol type.</p>
   */
  ProtocolType: ProtocolType | string | undefined;

  /**
   * <p>The revision ID.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

export namespace ImportAssetFromApiGatewayApiResponseDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportAssetFromApiGatewayApiResponseDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The details in the response for an import request, including the signed URL and other information.</p>
 */
export interface ImportAssetFromSignedUrlResponseDetails {
  /**
   * <p>The name for the asset associated with this import job.</p>
   */
  AssetName: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.</p>
   */
  Md5Hash?: string;

  /**
   * <p>The unique identifier for the revision associated with this import response.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The signed URL.</p>
   */
  SignedUrl?: string;

  /**
   * <p>The time and date at which the signed URL expires, in ISO 8601 format.</p>
   */
  SignedUrlExpiresAt?: Date;
}

export namespace ImportAssetFromSignedUrlResponseDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportAssetFromSignedUrlResponseDetails): any => ({
    ...obj,
  });
}

/**
 * Details from an import from Amazon Redshift datashare response.
 */
export interface ImportAssetsFromRedshiftDataSharesResponseDetails {
  /**
   * A list of Amazon Redshift datashare asset sources.
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this import job.
   */
  RevisionId: string | undefined;
}

export namespace ImportAssetsFromRedshiftDataSharesResponseDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportAssetsFromRedshiftDataSharesResponseDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details from an import from Amazon S3 response.</p>
 */
export interface ImportAssetsFromS3ResponseDetails {
  /**
   * <p>Is a list of Amazon S3 bucket and object key pairs.</p>
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import response.</p>
   */
  RevisionId: string | undefined;
}

export namespace ImportAssetsFromS3ResponseDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportAssetsFromS3ResponseDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details for the response.</p>
 */
export interface ResponseDetails {
  /**
   * <p>Details for the export to signed URL response.</p>
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;

  /**
   * <p>Details for the export to Amazon S3 response.</p>
   */
  ExportAssetsToS3?: ExportAssetsToS3ResponseDetails;

  /**
   * <p>Details for the export revisions to Amazon S3 response.</p>
   */
  ExportRevisionsToS3?: ExportRevisionsToS3ResponseDetails;

  /**
   * <p>Details for the import from signed URL response.</p>
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;

  /**
   * <p>Details for the import from Amazon S3 response.</p>
   */
  ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails;

  /**
   * <p>Details from an import from Amazon Redshift datashare response.</p>
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesResponseDetails;

  /**
   * <p>The response details.</p>
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiResponseDetails;
}

export namespace ResponseDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the job error.</p>
 */
export interface ImportAssetFromSignedUrlJobErrorDetails {
  /**
   * <p>Information about the job error.</p>
   */
  AssetName: string | undefined;
}

export namespace ImportAssetFromSignedUrlJobErrorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportAssetFromSignedUrlJobErrorDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the job error.</p>
 */
export interface Details {
  /**
   * <p>Information about the job error.</p>
   */
  ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;

  /**
   * <p>Information about the job error.</p>
   */
  ImportAssetsFromS3JobErrorDetails?: AssetSourceEntry[];
}

export namespace Details {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Details): any => ({
    ...obj,
  });
}

export enum JobErrorLimitName {
  Amazon_Redshift_datashare_assets_per_revision = "Amazon Redshift datashare assets per revision",
  Asset_size_in_GB = "Asset size in GB",
  Assets_per_revision = "Assets per revision",
}

export enum JobErrorResourceTypes {
  ASSET = "ASSET",
  DATA_SET = "DATA_SET",
  REVISION = "REVISION",
}

/**
 * An error that occurred with the job request.
 */
export interface JobError {
  /**
   * The code for the job error.
   */
  Code: Code | string | undefined;

  /**
   * <p>The details about the job error.</p>
   */
  Details?: Details;

  /**
   * <p>The name of the limit that was reached.</p>
   */
  LimitName?: JobErrorLimitName | string;

  /**
   * The value of the exceeded limit.
   */
  LimitValue?: number;

  /**
   * The message related to the job error.
   */
  Message: string | undefined;

  /**
   * The unique identifier for the resource related to the error.
   */
  ResourceId?: string;

  /**
   * The type of resource related to the error.
   */
  ResourceType?: JobErrorResourceTypes | string;
}

export namespace JobError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobError): any => ({
    ...obj,
  });
}

export enum State {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  ERROR = "ERROR",
  IN_PROGRESS = "IN_PROGRESS",
  TIMED_OUT = "TIMED_OUT",
  WAITING = "WAITING",
}

export interface CreateJobResponse {
  /**
   * <p>The ARN for the job.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Details about the job.</p>
   */
  Details?: ResponseDetails;

  /**
   * <p>The errors associated with jobs.</p>
   */
  Errors?: JobError[];

  /**
   * <p>The unique identifier for the job.</p>
   */
  Id?: string;

  /**
   * <p>The state of the job.</p>
   */
  State?: State | string;

  /**
   * <p>The job type.</p>
   */
  Type?: Type | string;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace CreateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request body for CreateRevision.</p>
 */
export interface CreateRevisionRequest {
  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateRevisionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRevisionRequest): any => ({
    ...obj,
  });
}

export interface CreateRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p> <p>Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the revision.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

export namespace CreateRevisionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRevisionResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssetRequest {
  /**
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace DeleteAssetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssetRequest): any => ({
    ...obj,
  });
}

export interface DeleteDataSetRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;
}

export namespace DeleteDataSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataSetRequest): any => ({
    ...obj,
  });
}

export interface DeleteEventActionRequest {
  /**
   * <p>The unique identifier for the event action.</p>
   */
  EventActionId: string | undefined;
}

export namespace DeleteEventActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventActionRequest): any => ({
    ...obj,
  });
}

export interface DeleteRevisionRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace DeleteRevisionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRevisionRequest): any => ({
    ...obj,
  });
}

export interface GetAssetRequest {
  /**
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace GetAssetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssetRequest): any => ({
    ...obj,
  });
}

export interface GetAssetResponse {
  /**
   * <p>The ARN for the asset.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the asset.</p>
   */
  AssetDetails?: AssetDetails;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId?: string;

  /**
   * <p>The unique identifier for the asset.</p>
   */
  Id?: string;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId?: string;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace GetAssetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssetResponse): any => ({
    ...obj,
  });
}

export interface GetDataSetRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;
}

export namespace GetDataSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataSetRequest): any => ({
    ...obj,
  });
}

export interface GetDataSetResponse {
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin | string;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the data set.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace GetDataSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataSetResponse): any => ({
    ...obj,
  });
}

export interface GetEventActionRequest {
  /**
   * <p>The unique identifier for the event action.</p>
   */
  EventActionId: string | undefined;
}

export namespace GetEventActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventActionRequest): any => ({
    ...obj,
  });
}

export interface GetEventActionResponse {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * <p>The ARN for the event action.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event?: Event;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  Id?: string;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace GetEventActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventActionResponse): any => ({
    ...obj,
  });
}

export interface GetJobRequest {
  /**
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

export namespace GetJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj,
  });
}

export interface GetJobResponse {
  /**
   * <p>The ARN for the job.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Details about the job.</p>
   */
  Details?: ResponseDetails;

  /**
   * <p>The errors associated with jobs.</p>
   */
  Errors?: JobError[];

  /**
   * <p>The unique identifier for the job.</p>
   */
  Id?: string;

  /**
   * <p>The state of the job.</p>
   */
  State?: State | string;

  /**
   * <p>The job type.</p>
   */
  Type?: Type | string;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace GetJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobResponse): any => ({
    ...obj,
  });
}

export interface GetRevisionRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace GetRevisionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRevisionRequest): any => ({
    ...obj,
  });
}

export interface GetRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p> <p>Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the revision.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

export namespace GetRevisionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRevisionResponse): any => ({
    ...obj,
  });
}

export interface ListDataSetRevisionsRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListDataSetRevisionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSetRevisionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A revision is a container for one or more assets.</p>
 */
export interface RevisionEntry {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with this revision.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p> <p>Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id: string | undefined;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

export namespace RevisionEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevisionEntry): any => ({
    ...obj,
  });
}

export interface ListDataSetRevisionsResponse {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The asset objects listed by the request.</p>
   */
  Revisions?: RevisionEntry[];
}

export namespace ListDataSetRevisionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSetRevisionsResponse): any => ({
    ...obj,
  });
}

export interface ListDataSetsRequest {
  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: string;
}

export namespace ListDataSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A data set is an AWS resource with one or more revisions.</p>
 */
export interface DataSetEntry {
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType: AssetType | string | undefined;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The description for the data set.</p>
   */
  Description: string | undefined;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the data set.</p>
   */
  Name: string | undefined;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin: Origin | string | undefined;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace DataSetEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetEntry): any => ({
    ...obj,
  });
}

export interface ListDataSetsResponse {
  /**
   * <p>The data set objects listed by the request.</p>
   */
  DataSets?: DataSetEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListDataSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSetsResponse): any => ({
    ...obj,
  });
}

export interface ListEventActionsRequest {
  /**
   * <p>The unique identifier for the event source.</p>
   */
  EventSourceId?: string;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListEventActionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventActionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An event action is an object that defines the relationship between a specific event and an automated action that will be taken on behalf of the customer.</p>
 */
export interface EventActionEntry {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action: Action | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the event action.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event: Event | undefined;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace EventActionEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventActionEntry): any => ({
    ...obj,
  });
}

export interface ListEventActionsResponse {
  /**
   * <p>The event action objects listed by the request.</p>
   */
  EventActions?: EventActionEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListEventActionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventActionsResponse): any => ({
    ...obj,
  });
}

export interface ListJobsRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId?: string;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId?: string;
}

export namespace ListJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

/**
 * AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created.
 */
export interface JobEntry {
  /**
   * <p>The ARN for the job.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>Details of the operation to be performed by the job, such as export destination details or import source details.</p>
   */
  Details: ResponseDetails | undefined;

  /**
   * <p>Errors for jobs.</p>
   */
  Errors?: JobError[];

  /**
   * <p>The unique identifier for the job.</p>
   */
  Id: string | undefined;

  /**
   * <p>The state of the job.</p>
   */
  State: State | string | undefined;

  /**
   * <p>The job type.</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace JobEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobEntry): any => ({
    ...obj,
  });
}

export interface ListJobsResponse {
  /**
   * <p>The jobs listed by the request.</p>
   */
  Jobs?: JobEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListRevisionAssetsRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace ListRevisionAssetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRevisionAssetsRequest): any => ({
    ...obj,
  });
}

export interface ListRevisionAssetsResponse {
  /**
   * <p>The asset objects listed by the request.</p>
   */
  Assets?: AssetEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListRevisionAssetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRevisionAssetsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * A label that consists of a customer-defined key and an optional value.
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request body for RevokeRevision.</p>
 */
export interface RevokeRevisionRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment: string | undefined;
}

export namespace RevokeRevisionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeRevisionRequest): any => ({
    ...obj,
  });
}

export interface RevokeRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p> <p>Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

export namespace RevokeRevisionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeRevisionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request body for SendApiAsset.</p>
 */
export interface SendApiAssetRequest {
  /**
   * <p>The request body.</p>
   */
  Body?: string;

  /**
   * <p>Attach query string parameters to the end of the URI (for example, /v1/examplePath?exampleParam=exampleValue).</p>
   */
  QueryStringParameters?: { [key: string]: string };

  /**
   * <p>Asset ID value for the API request.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>Data set ID value for the API request.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request.</p>
   */
  RequestHeaders?: { [key: string]: string };

  /**
   * <p>HTTP method value for the API request. Alternatively, you can use the appropriate verb in your request.</p>
   */
  Method?: string;

  /**
   * <p>URI path value for the API request. Alternatively, you can set the URI path directly by invoking /v1/{pathValue}</p>
   */
  Path?: string;

  /**
   * <p>Revision ID value for the API request.</p>
   */
  RevisionId: string | undefined;
}

export namespace SendApiAssetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendApiAssetRequest): any => ({
    ...obj,
  });
}

export interface SendApiAssetResponse {
  /**
   * <p>The response body from the underlying API tracked by the API asset.</p>
   */
  Body?: string;

  /**
   * <p>The response headers from the underlying API tracked by the API asset.</p>
   */
  ResponseHeaders?: { [key: string]: string };
}

export namespace SendApiAssetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendApiAssetResponse): any => ({
    ...obj,
  });
}

export interface StartJobRequest {
  /**
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

export namespace StartJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartJobRequest): any => ({
    ...obj,
  });
}

export interface StartJobResponse {}

export namespace StartJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request body for TagResource.</p>
 */
export interface TagResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * A label that consists of a customer-defined key and an optional value.
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * The key tags.
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request body for UpdateAsset.</p>
 */
export interface UpdateAssetRequest {
  /**
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace UpdateAssetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssetRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssetResponse {
  /**
   * <p>The ARN for the asset.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the asset.</p>
   */
  AssetDetails?: AssetDetails;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId?: string;

  /**
   * <p>The unique identifier for the asset.</p>
   */
  Id?: string;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId?: string;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace UpdateAssetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request body for UpdateDataSet.</p>
 */
export interface UpdateDataSetRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;
}

export namespace UpdateDataSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDataSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSetResponse {
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin | string;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace UpdateDataSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDataSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request body for UpdateEventAction.</p>
 */
export interface UpdateEventActionRequest {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  EventActionId: string | undefined;
}

export namespace UpdateEventActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventActionRequest): any => ({
    ...obj,
  });
}

export interface UpdateEventActionResponse {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * <p>The ARN for the event action.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event?: Event;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  Id?: string;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace UpdateEventActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventActionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request body for UpdateRevision.</p>
 */
export interface UpdateRevisionRequest {
  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace UpdateRevisionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRevisionRequest): any => ({
    ...obj,
  });
}

export interface UpdateRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p> <p>Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

export namespace UpdateRevisionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRevisionResponse): any => ({
    ...obj,
  });
}
