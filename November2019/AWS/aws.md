# What is AWS?
- Global Cloud Platform which allows us to host and manages services on the internet.
- Host companies infrastructure; hosting provider.
- Infrastructure as a service that AWS provides bare servers as a service so that the companies don't need to manage the backup and the power supply of the service.
- Platform as a service > Ruby, Java, PHP, etc.. so that we don't have to manage the binaries of these applications.
- Software as a service > You get email sending capabilities like SES; you get queing services like sqs.
- Cloud Storage Platform where and you have a lot of storage options including EBS and S3.

- Amazon Web SErvies provides on-demand cloud computing platforms to individuals, companies and governments, on a metered pay-as-you-basis. It offers services in various domains such as compute, storage, networking, management, security, etc.

# Service Overview
## EC2 (Elastic Compute Cloud)
- Service which gives us the bare servers.
- Provide us a machine which we can launch and run software on those; small/big machine based on the requirements.

## VPC (Virtual Private Cloud)
- Lets us create newtworks in the cloud and then run our servers in those networks

## S3 (Simple Storage Service)
- Provide us opportunity to upload and share files.
- Does mostly a file storage and sharing service.
(Content Delivery Network is basically caching system)

## RDS (Relational Database Sercive)
- Allows us to run and manage DB on the cloud.

## Route 53
- Manage DNS service where we can point our DNS to Amazon and they care of the stuff.
- Global and scalable DNS service (scales according to demand).

## ELB (Elastic Load Balancing)
- A Service which gives us the opportunity to load balanced imcoming traffic to multiple machines.
- This way we can scale up the web applications to any number of users.

## Autoscaling
- Adds capacity on-the-fly to elastic load balancers so that the website or application is never down due to a load.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Cloud Computing
- Cloud computing is the practice of using remote servers on the internet for carrying ouyt a task, rather than using our own computers/servers.

- Without Cloud Computing, we have to configure everything manually (need to buy servers as well). 
        - Servers have to be connected to the internet.
        - Set up static IP address (contact ISP) for servers.
        - Buy a domain (domain is getting converted into an IP address by a DNS server and these IP address is basically pointing to these servers).
        - # of servers will also increase as the user increases.
        - Also requires a team that manage the whole servers (more workforce required).

- With Cloud Computing
        - AWS automatically provides a static IP address.
        - It has a service to provide a domain name as well; just need to configure domain name to connect to the given IP address.
        - All the servers and other stuffs are managed by the cloud provider.

## Benefits
- Little or no investment (no need to buy static server).
- More focus on app development.
- Requires less workforce.
- Highly scalable.


## Cloud Computing Models
1. Deployment Models (3 ways of deploying the application on cloud)

    a. Public Cloud
        - Computing services offered by third-party providers over the public Internet, making them available to anyone who wants to use or purchase them.
        (not for companies with sensitive data policies and confidential datas)

    b. Private Cloud
        - Model of cloud computing where IT services are provisioned over private IT infrastructure for the dedicated use of a single organization.

    c. Hybrid Cloud
        - Cloud computing environment that uses a mix of on-premises, privated cloud and third-party, public cloud services with orchestration between the two platforms.

2. Service Models
    a. Infrastructure as Service (3 ways of accessing services on cloud)
        - Providing the complete access to the server's OS. Typically, IaaS provides hardware, storage, servers and data center space or network components; it may also include software (ex. EC2)

    b. Platform as a Service
        - One does not get access to the whole OS. Rather access is given at a Dashboard level, where a user uploads the data, and the rest is taken care by the could provider (ex. Elastic Beanstalk)
        - Basically an automated version of infrastructure as a service where we get specific access on the server that we can just upload the files; there is nothing else that we can control

    c. Software as a Service
        - Refers to the practice of directly providing the software to the customer, witout making any server or dashboard available to them (ex. Facebook).


## Main Service Domains in AWS
    1. Compute
        - Compute domain will have a service where we can launch and implement the workload

        a. EC2 
            - One of the integral parts of the AWS ecosystem. EC2 enables on-demand, scalable computing capacity in the AWS cloud.
            - Its like a raw server given to the users;  we can install software on it or make it a database server or make it a web server.
            - Have access to OS.

        b. Elastic Beanstalks
            - We can quickly deploy and manage applications in the AWS cloud without having to learn about the infrastructure that runs those applications.
            - Basically Web application server; cannot install any other software on it. Can upload the website.
            - Have access to Dashboard (no OS), no access to the software and everything is pre-configured.
            - Automated version of EC2
            - Only available and used for web servers (website deployment).

        c. Lambda
            - A compute service that lets you run code without provisioning or managing servers.
            - Cannot make website, host application 
            - Only used for back-end processing.
            - Only processing happens on Lambda; 

        d. Elastic LoadBalancer
            - Distribues incoming application or network traffic across multiple targets, such as Amazon EC2 instances, containers, and IP addresses, in multiple Availbility Zones.
            - Assuming there are 3 servers running one the website, elastic load balancer is responsible for distributing traffic among all the healthy instances.
            - It will give users one domain to go on (one IP address to hit on) and elastic loadbalancer will automatically analyze where to send the requests which means it constantly keeps a check on all the instances which are running in our cloud environment.
            - Responsible for never making one server max out on its performance but always distribute traffic equally.

        e. Autoscaling
            - Monitors our applications and automatically adjust capacity to maintain steady, predictable performance at the lowest possible cost.
            - Always has to work in conjunction with Elastic Loadbalancer (not the other way around)

        f. ECR (Elastic Container Registry) - store Docker images
            - A fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker Container images.
            (Docker is a took to launch up Os in the minimum size possible; they act as a VM and take the minimum resource/space possible)

        g. ECS (Elastic Container Service) - run Docker images
            - A highly scalable, high performance container orchestration service that supports Docker containers and allows us to easily run and scale containerized applications on AWS.
            - Runs any Docker images on the AWS infrastructure 

    2. Storage
        - Storing binary files on the remote servers

        a. S3
             - An object storage service that offers industry-leading scalbility, data availability, security, and performance.
             - For example, rather than storing all the files on the server on which the website exists, we can store all the files on S3 and then we can just access it from S3.

        b. Glacier
            - A secure, durable and extremely low-cost cloud storage service for data archiving and long-term backup.
            - Basically takes a backup of the S3 service 
            - Assuming we have S3 bucket (root folder) and there are a lot of files in this bucket and if we want to take a backup of all those files we can use Glacier service.
            - Backup Service.

        c. EFS (Elastic File System) 
            - Provides a simple, scalable, elastic file system for Lunix-based workloads for use with AWS Cloud services and on-premises resources.
            - Can be mounted on our OS.
            - It acts as a shared drive between multiple instances in AWS.

        d. Storage Gateway
            - Connects an on-premises software appliance with cloud-based storage to provide seamless integration with data security features between our on-premises IT environment and the AWS storage infrastructure.

    3. Database
        a. RDS (not a DB, its a relational DB service)
            - Makes it easy to set up, operate, and scale a relational database in the cloud.
            - Responsible for managing the launched atabases like SQL, PSQL, Oracle, etc.

        b. Dynamo DB
            - A key-value and document database that delivers single-digit millisecond performance at any scale.
            - Its for un-structured DB (no SQL)

        c. Redshift
            - A fast, scalable data warehouse that makes it simple and cost-effective to analyse all the data across our data warehouse and data lake.
            - Comprises of multiple database engines which it can connect to and give the out as required.

        e. ElastiCache
            - Can be used to seamlessly deploy, run and scale popular open source compatible in-memory data stores.
            - Stores frequently used data in cache
            - Whenever a similar request will come, rather than querying the database the same data will be going back to the customer from the cache layet itself.

    4. Security
        a. IAM (Identify and Access Management)
            - Enables us to manage access to AWS services and resources securely.
            - With one AWS account, there will be more than one users with different permission and access level.
            - Able to create multiple users for a single AWS account with granular permission.

        b. KMS (Key Management Service)
            - Makes it easy for us to create and manage keys and control the use of encryption across a wide range of AWS services and in our applications.
            - Create key-pairs to authenticate.
        
    5. Management
        a. CloudFormation 
            - Provides a common language for you to describe and provision all the infrastructure resources in our cloud environment.
            - An automation tool to help us to launhce AWS resources by specifying it in a JSON file.
            - Used to deploy an architecture

        b. OpsWorks
            - A configuration management service that provides managed instances of Chef and Puppet. chef and Puppet are automation platforms.
            - Used to specify consistencies in the architecture.

        c. CloudTrail
            - A service that enables governance, compliance, operational auditing, and rist auditing of our AWS account. With CloudTrail, we can log, continously monitor, and retain account activity related to actions across the AWS infrastructure.

        d. CloudWatch 
            - A monitoring and management service built for developers, system operators, site reliability engineerings (SRE), and IT managers.

    6. Customer Engagement
        a. Amazon Connect
            - A ready to deploy customer contact center, which can help us setup IVR calls to agents in the shortest time possible.

        b. Simple Email Service (SES)
            - a Cloud-based email sending service designed to help digital marketers and application developers send marketing, notification and transactional emails.

    7. App Integration
        a. Simple Notification Service
            - A highly available, durable, secure, fully managed pub/sub messaging service that enables us to decouple microservices, distributed systems, and serverless applications.

        b. Simple Queue Service (SQS)
            - A fully managed message queuing service that enables us to decouple and scale microservices, distributed systems, and serverless applications.