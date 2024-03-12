#include<iostream>
using namespace std;
void selectionSort(int *arr,int n)
{
for(int i=0;i<n-1;i++)
 {
    int minIndex=i;
    for(int j=i+1;j<n;j++)
     {
      if(arr[i]>arr[minIndex])
      {
        minIndex=j;
      }
    }
    int temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;
 }
}

int main()
{

int arr[]={10,23,4,12};
int n=4;
cout<<"Orignal array\n";
for(int i=0;i<n;i++)
{
cout<<arr[i]<<' ';
}
for(int i=0;i<n-1;i++)
{
    int minIndex=i;
    for(int j=i+1;j<n;j++)
     {
      if(arr[j]<arr[minIndex])
      {
        minIndex=j;
      }
    }
    swap(arr[i],arr[minIndex]);
 }
cout<<"\nAfter sort\n";
for(int i=0;i<n;i++)
{
cout<<arr[i]<<' ';
}

return 0;

}
