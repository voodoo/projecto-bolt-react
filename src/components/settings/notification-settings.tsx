import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function NotificationSettings() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>
            Choose what updates you want to receive via email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="project-updates">Project Updates</Label>
            <Switch id="project-updates" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="customer-activity">Customer Activity</Label>
            <Switch id="customer-activity" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="mentions">Mentions</Label>
            <Switch id="mentions" defaultChecked />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>
            Configure your mobile and desktop notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="push-all">Enable Push Notifications</Label>
            <Switch id="push-all" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-critical">Critical Alerts Only</Label>
            <Switch id="push-critical" defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}