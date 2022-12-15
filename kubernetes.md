<!-- ctrl+shift+v for preveiw -->
# Kubernetes
Config file create objects.

# Syntax
apiVersion - restricts types of objects:
- v1: componentStatus, Endpoints, Namespace, Event, Pod, configMap, Service, Volume, PersistentVolume, PersistentVolumeClaim, ServiceAccount, ...
- apps/v1: ControllerRevision, StatefulSet, Deployment, ...

kind - type of an object.
there are couple of types of objects:
- StatefulSet
- ReplicaController
- Pod
- Service
- componentStatus
- configMap
- Event
- Endpoints
- Namespace
- ControllerRevision
- Deployment
- Volume
- PersistentVolume
- PersistentVolumeClaim
- Secret
- ServiceAccount
- ClusterRole
- ClusterRoleBinding
- ...

selector - label - Links for example Service with Pod. Selector looks for specified key:value pair (here component:web) and for all of them sets netowrking
# Structure
## Cluster
Cluster - ???
## Node
Node - Virtual Machine running on my computer. On Windows through Docker Desktop. Used by Kube to run some number of different objects.
## Namespace
Namespace - ???
## Object types
Objects serve different purposes - running a container (Pod), monitoring a container, setting up networking (Service), etc.
### Pod
Pod - grouping of containers with a very common purpose. Smallest thing we can deploy to run a single container. One or more containers inside that has to work together. For example app crash without one or other containers are useless without each other. Good for dev.
### Service
Service - Sets up networking in a Kubernetes Cluster. There are four subtypes:
- CLusterIP - Exposes a set of pods to 'other objects in the cluster'.Only for objects inside cluster to object inside cluster it is assigned for.
- NodePort - Exposes a container to the outside world (only good for dev purposes)
- LoadBalancer - Legacy way of getting network traffic into a cluster (for prod). Grants access to only one set of pods.
- Ingress - Exposes a set of services to the outide world (for prod). There are two types: ingress-nginx -> community project (github.com/kubernetes/ingress-nginx), kubernetes-ingress -> nginx project (github.com/nginxinc/kubernetes-ingress).
### Deployment
Deployment - Maintains a set of identical pods (one or more), ensuring that they have the correct config and that the right number exist. Can be used as pod to run containers for our application. Good for dev, good for prod.
### Volumes (Volume, PersistentVolume, PersistentVolumeClaim)
Volume - Not to confuse with docker volume. To store data. Tied to pod. If pod dies, volume also dies. Not apropriate for database storage.
PersistentVolume - Not to confuse with docker volume. To store data. Not tied to any pod. When pod dies, volume persist.
PersistentVolumeClaim - Persisten Volume manager, dynamically fetches Persistent Volumes. There are 3 Access Modes:
- ReadWriteOnce -> Can be used by a single node.
- ReadOnlyMany -> Mulitple nodes can read from this.
- ReadWriteMany -> Can be read and written to by many nodes.
### Secret
Secret - Securely stores a piece of information in the cluster, such as a database password. Exceptionally do not require configuration file to get created instead we use imperative command.There are three types of secrets: generic, docker-registry and tls.
### ServiceAccount
ServiceAccount - for dashboard

# Important Takeaways
- Kubernetes is a system to deploy containerized apps
- Nodes are individual machines (or VM's) that run containers
- Masters are machines (or VM's) with a set of programs to manage nodes
- Kubernetes didn't build our images - it got them from somewhere else
- Kubernetes (the master) decides where to run each container - each node can run a dissmilar set of containers
- To deploy something, we update the desired state of the master with a config file
- The master works constantly to meet your desired state

# Commands
## Version
```kubectl version```

## ???
```kubectl proxy```

## Feeding a config file to Kubectl
```kubectl apply -f <filename>```
CLI we use to change our Kubernetes cluster; Change the current configuration of our cluster; We want to specify a file that has the config changes; Path to the file with the config;
You can put all configs in one folder then as a filename type name of the dir and kubectl wil load all of them at once

## Print the status of all running pods
```kubectl get <object_type>```
CLI we use to change our Kubernetes cluster; We want to retrieve information about a running object; Specifies the object type that we want to get information about;

## ???
```kubectl get pods -o wide```
CLI we use to change our Kubernetes cluster; We want to retrieve information about a running object;  Specifies the object type that we want to get information about; ???; ???;

## ???
```kubectl get <object_type> -n <object_namespace>```
```kubectl get svc -n ingress-nginx```
CLI we use to change our Kubernetes cluster; We want to retrieve information about a running object; Specifies the object type that we want to get information about (svc - services); We want to specify the name of the object; Namespace of object;

## ???
```kubectl get pods --all-namespaces```

## Get detailed info about an object
```kubectl describe <object_type> <object_name>```
CLI we use to change our Kubernetes cluster; We want to get detailed info; Specifies the object type that we want to get information about; Name of object;

## Get detailed info about all objects of given type
```kubectl describe <object_type>```
CLI we use to change our Kubernetes cluster; We want to get detailed info; Specifies the object type that we want to get information about;

## Remove an object
```kubectl delete -f <config_file>```
CLI we use to change our Kubernetes cluster; We want to delete a running object; We want to specify a file that has the config changes; Path to config file that created this object;


## Imperative command (ugh) to update image
```kubectl set image <object_type>/<object_name> <container_name>=<new_image_to_use>```
CLI we use to change our Kubernetes cluster; We want to change a property; We want to change 'image' property; Type of object; /; Name of object; Name of the container we are updating (get this from config file); =; Full name of image to use with tag;
```kubectl set image deployment/client-deployment client=stephengrider/multi-client:v5```

## Logs
```kubectl logs <object name>```
CLI we use to change our Kubernetes cluster; We want to see logs; Name of the object we want to see;
```kubectl get pods```
```kubectl logs server-deployment-849974f748-6np5z```

## Where to put Persistent Volumes
```kubectl get storageclass```

## Creating a Secret
```kubectl create secret generic <secret_name> --from-literal key=value```
CLI we use to change our Kubernetes cluster; Imperative command to create new object; Type of object we are going to create; Type of secret; Name of secret, for later reference in a pod config; We are going to add the secret information into this command, as opposed to from . file; Key-value pair of the secret information;
```kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres_password```

## Creating admin token
```kubectl -n kubernetes-dashboard create token admin-user```

## Port forwarding for ingrss-nginx
```kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80```

# Ingress-nginx 404 Page Not Found
```kubectl get svc -n ingress-nginx```
```kubectl get pods --all-namespaces```
```netstat -ano -o```
```netstat -ano -p tcp | Select-String ":80"```
```tasklist | Select-String "<nubmer>"```
```kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80```
