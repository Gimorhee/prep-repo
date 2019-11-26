# What is AWS?
- Global Cloud Platform which allows us to host and manages services on the internet.
- Host companies infrastructure; hosting provider.
- Infrastructure as a service that AWS provides bare servers as a service so that the companies don't need to manage the backup and the power supply of the service.
- Platform as a service > Ruby, Java, PHP, etc.. so that we don't have to manage the binaries of these applications.
- Software as a service > You get email sending capabilities like SES; you get queing services like sqs.
- Cloud Storage Platform where and you have a lot of storage options including EBS and S3.

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
- Addes capacity on-the-fly to elastic load balancers so that the website or application is never down due to a load.


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

## CLoud Computing Models
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
    b. Platform as a Service
    c. Software as a Service