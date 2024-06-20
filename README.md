# CPU--Scheduler
A C++ implementation of many CPU scheduling techniques. The algorithms that are provided are Shortest Process Next (SPN), Shortest Remaining Time (SRT), Round Robin (RR), First Come First Serve (FCFS).

## First Come First Serve (FCFS)
First Come First Served (FCFS) is a scheduling algorithm in which the process that arrives first is executed first. It is a simple and easy-to-understand algorithm, but it can lead to poor performance if there are processes with long burst times. This algorithm does not have any mechanism for prioritizing processes, so it is considered a non-preemptive algorithm. In FCFS scheduling, the process that arrives first is executed first, regardless of its burst time or priority. This can lead to poor performance, as longer running processes will block shorter ones from being executed. It is commonly used in batch systems where the order of the processes is important.

## Round Robin with varying time quantum (RR)
Round Robin (RR) with variable quantum is a scheduling algorithm that uses a time-sharing approach to divide CPU time among processes. In this version of RR, the quantum (time slice) is not fixed and can be adjusted depending on the requirements of the processes. This allows processes with shorter burst times to be given smaller quanta and vice versa.

The algorithm works by maintaining a queue of processes, where each process is given a quantum of time to execute on the CPU. When a process's quantum expires, it is moved to the back of the queue, and the next process in the queue is given a quantum of time to execute.

The variable quantum allows the algorithm to be more efficient as it allows the CPU to spend more time on shorter processes and less time on longer ones. This can help to minimize the average waiting time for processes. Additionally, it also helps to avoid the issue of starvation, which occurs when a process with a long burst time prevents other processes from executing.

## Shortest Process Next (SPN)
Shortest Process Next (SPN) is a scheduling algorithm that prioritizes the execution of processes based on their burst time, or the amount of time they need to complete their task. It is a non-preemptive algorithm which means that once a process starts executing, it runs until completion or until it enters a waiting state.

The algorithm maintains a queue of processes, where each process is given a burst time when it arrives. The process with the shortest burst time is executed first, and as new processes arrive, they are added to the queue and sorted based on their burst time. The process with the shortest burst time will always be at the front of the queue, and thus will always be executed next.

This algorithm can be beneficial in situations where the objective is to minimize the average waiting time for processes, since shorter processes will be executed first, and thus will spend less time waiting in the queue. However, it can lead to longer running processes being blocked by shorter ones, which can negatively impact the overall performance of the system.

In summary, SPN is a scheduling algorithm that prioritizes the execution of processes based on their burst time, it's non-preemptive and it's commonly used in situations where the objective is to minimize the average waiting time for processes.

## Shortest Remaining Time (SRT)
Shortest Remaining Time Next (SRT) is a scheduling algorithm that is similar to the Shortest Process Next (SPN) algorithm, but it is a preemptive algorithm. This means that once a process starts executing, it can be interrupted by a new process with a shorter remaining time.

The algorithm maintains a queue of processes, where each process is given a burst time when it arrives. The process with the shortest remaining time is executed first, and as new processes arrive, they are added to the queue and sorted based on their remaining time. The process with the shortest remaining time will always be at the front of the queue, and thus will always be executed next.

This algorithm can be beneficial in situations where the objective is to minimize the average waiting time for processes, since shorter processes will be executed first, and thus will spend less time waiting in the queue. Additionally, it can be useful in situations where the burst time of processes is not known in advance, since the algorithm can adapt to changes in the remaining time as the process is executing.

In summary, SRT is a scheduling algorithm that prioritizes the execution of processes based on their remaining time, it's a preemptive algorithm, which means that it can interrupt a process that's already executing if a new process with a shorter remaining time arrives and it's commonly used in situations where the objective is to minimize the average waiting time for processes and burst time is not known in advance.

First Come First Serve (FCFS)
1. Pros: Simple, easy to implement.
2. Cons: Poor performance with varying process lengths, can lead to long waiting times.
3. Best For: Simple, non-time-critical systems.

Round Robin with Varying Time Quantum (RR)
1. Pros: Fair, predictable, good for responsiveness in interactive systems.
2. Cons: Can have high average waiting time and context switching overhead.
3. Best For: Time-sharing systems needing fairness and quick responses.

Shortest Process Next (SPN)
1. Pros: Minimizes average waiting and turnaround time for non-preemptive scheduling.
2. Cons: Can cause starvation of longer processes, not ideal for interactive systems.
3. Best For: Batch processing with predictable job lengths.

Shortest Remaining Time (SRT)
1. Pros: Minimizes average waiting and turnaround time.
2. Cons: High context switching overhead, possible starvation of long processes.
3. Best For: Systems needing quick response times and predictable job lengths.

Conclusion
Best Overall for Interactive Systems: Round Robin (RR).
Best for Minimizing Waiting Time: Shortest Remaining Time (SRT) or Shortest Process Next (SPN), depending on whether preemption is acceptable.
Easiest to Implement: First Come First Serve (FCFS).
