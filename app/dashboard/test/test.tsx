import React from "react";
import { Bell, ChevronDown, Search, Upload, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", engagement: 1000, purchases: 400 },
  { month: "Feb", engagement: 1500, purchases: 600 },
  { month: "Mar", engagement: 2000, purchases: 800 },
  { month: "Apr", engagement: 2500, purchases: 1000 },
  { month: "May", engagement: 3000, purchases: 1200 },
];

export default function LoyaltyDashboard() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Loyalty Program Dashboard</h1>
        <div className="flex items-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <User className="mr-2 h-4 w-4" />
                Account
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <Tabs defaultValue="analytics">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="analytics">User Analytics</TabsTrigger>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
          <TabsTrigger value="config">System Config</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
        </TabsList>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Engagement and Purchases</CardTitle>
              <CardDescription>
                Monthly trends of user engagement and purchases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  engagement: {
                    label: "User Engagement",
                    color: "hsl(var(--chart-1))",
                  },
                  purchases: {
                    label: "Purchases",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="engagement"
                      stroke="var(--color-engagement)"
                    />
                    <Line
                      type="monotone"
                      dataKey="purchases"
                      stroke="var(--color-purchases)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Segments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>A list of your customer segments.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Segment Name</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Avg. Purchase Value</TableHead>
                    <TableHead>Loyalty Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>VIP</TableCell>
                    <TableCell>1,234</TableCell>
                    <TableCell>$500</TableCell>
                    <TableCell>10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Regular</TableCell>
                    <TableCell>5,678</TableCell>
                    <TableCell>$100</TableCell>
                    <TableCell>1,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>New Customers</TableCell>
                    <TableCell>2,345</TableCell>
                    <TableCell>$50</TableCell>
                    <TableCell>100</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="promotions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Promotion</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="promotion-name">Promotion Name</Label>
                  <Input
                    type="text"
                    id="promotion-name"
                    placeholder="Enter promotion name"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="promotion-type">Promotion Type</Label>
                  <RadioGroup defaultValue="percentage">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="percentage" id="percentage" />
                      <Label htmlFor="percentage">Percentage Discount</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bogo" id="bogo" />
                      <Label htmlFor="bogo">Buy One Get One</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="discount-value">Discount Value</Label>
                  <Slider defaultValue={[10]} max={100} step={1} />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label>Date Range</Label>
                  <div className="flex space-x-2">
                    <DatePicker />
                    <DatePicker />
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label>Customer Segments</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vip" />
                    <Label htmlFor="vip">VIP</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="regular" />
                    <Label htmlFor="regular">Regular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="new" />
                    <Label htmlFor="new">New Customers</Label>
                  </div>
                </div>
                <Button>Create Promotion</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="config" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Loyalty System Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="points-per-dollar">Points per Dollar</Label>
                  <Input
                    type="number"
                    id="points-per-dollar"
                    className="w-20"
                    defaultValue={1}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="min-points-redemption">
                    Minimum Points for Redemption
                  </Label>
                  <Input
                    type="number"
                    id="min-points-redemption"
                    className="w-20"
                    defaultValue={100}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable-referrals">
                    Enable Referral Program
                  </Label>
                  <Switch id="enable-referrals" />
                </div>
                <Button>Save Configuration</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Send Customer Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="message-type">Message Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select message type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="push">Push Notification</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="message-content">Message Content</Label>
                  <Textarea placeholder="Type your message here." />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="file-upload">Attach Image</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="file-upload" type="file" />
                    <Button size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                </div>
                <Button>Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Button>Generate QR Code</Button>
          <Button variant="outline">Export Data</Button>
          <Button variant="secondary">Schedule Report</Button>
        </CardContent>
      </Card>

      <div className="fixed bottom-4 right-4 bg-background p-4 rounded-lg shadow-lg">
        <Progress value={progress} className="w-[300px]" />
        <p className="text-sm text-muted-foreground mt-2">
          Creating promotion: 66% complete
        </p>
      </div>

      <div className="fixed bottom-4 left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
        <p className="text-sm">Promotion "Summer Sale" created successfully!</p>
      </div>
    </div>
  );
}
